import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import nodemailer from "npm:nodemailer@6";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SMTP_USER = "korixllc@gmail.com";
const SMTP_PASS = Deno.env.get("GMAIL_APP_PASSWORD") ?? "lakqpjnrtelasqcw";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { subject, htmlBody, recipients } = await req.json();

    if (!subject || !htmlBody || !Array.isArray(recipients) || recipients.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Try SSL (port 465) first, fall back to TLS (port 587) on failure
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });

    // Verify connection
    try {
      await transporter.verify();
    } catch (_sslErr) {
      // Fall back to TLS port 587
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        tls: { rejectUnauthorized: false },
      });
      await transporter.verify();
    }

    const results = await Promise.allSettled(
      recipients.map((r: { name: string; email: string }) => {
        const personalizedHtml = htmlBody.replace(/\{\{name\}\}/g, r.name);
        return transporter.sendMail({
          from: `"KORIX LLC" <${SMTP_USER}>`,
          to: `${r.name} <${r.email}>`,
          subject,
          html: personalizedHtml,
        });
      })
    );

    const sent = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;
    const errors = results
      .filter((r): r is PromiseRejectedResult => r.status === "rejected")
      .map((r) => String(r.reason));

    return new Response(
      JSON.stringify({ sent, failed, errors }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
