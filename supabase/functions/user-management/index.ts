import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    // Verify the caller is authenticated
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Admin client uses service role — never exposed client-side
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    // Validate calling user's JWT before allowing admin operations
    const userClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );
    const { data: { user: caller }, error: callerErr } = await userClient.auth.getUser();
    if (callerErr || !caller) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { action, id, email, password } = await req.json();

    switch (action) {
      case "list": {
        const { data, error } = await supabaseAdmin.auth.admin.listUsers({ perPage: 200 });
        if (error) throw error;
        return new Response(
          JSON.stringify({ data: data.users }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      case "create": {
        if (!email || !password) throw new Error("Email and password are required");
        const { data, error } = await supabaseAdmin.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
        });
        if (error) throw error;
        return new Response(
          JSON.stringify({ data: data.user }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      case "update": {
        if (!id) throw new Error("User ID is required");
        const updates: { email?: string; password?: string } = {};
        if (email) updates.email = email;
        if (password) updates.password = password;
        const { data, error } = await supabaseAdmin.auth.admin.updateUserById(id, updates);
        if (error) throw error;
        return new Response(
          JSON.stringify({ data: data.user }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      case "delete": {
        if (!id) throw new Error("User ID is required");
        // Prevent self-deletion
        if (id === caller.id) throw new Error("You cannot delete your own account");
        const { error } = await supabaseAdmin.auth.admin.deleteUserById(id);
        if (error) throw error;
        return new Response(
          JSON.stringify({ data: { id } }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      default:
        return new Response(
          JSON.stringify({ error: `Unknown action: ${action}` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
