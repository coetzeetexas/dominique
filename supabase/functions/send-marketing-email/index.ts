import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import nodemailer from "npm:nodemailer@6";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SMTP_HOST = "mail.privateemail.com";
const SMTP_USER = Deno.env.get("SMTP_USER") ?? "admin@korixllc.com";
const SMTP_PASS = Deno.env.get("SMTP_PASS") ?? "Titch0606*";
const FROM_NAME = "KORIX LLC";

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

    // Try SSL port 465 first, fall back to STARTTLS 587
    let transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });

    try {
      await transporter.verify();
    } catch (_sslErr) {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
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
          from: `"${FROM_NAME}" <${SMTP_USER}>`,
          to: r.name ? `${r.name} <${r.email}>` : r.email,
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
