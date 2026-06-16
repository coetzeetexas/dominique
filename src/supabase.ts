import { createClient } from '@supabase/supabase-js';

// Env vars are embedded at build time by Vite. The fallback values are used
// when the deployment environment doesn't forward the .env file (e.g. Bolt CDN).
// The anon key is a public credential — safe to include in client-side code.
const url =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ||
  'https://ebjszgjbhbhxillmywbv.supabase.co';

const key =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVianN6Z2piaGJoeGlsbG15d2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MDU2MzQsImV4cCI6MjA5NzA4MTYzNH0.Km6m5lOj6EKhqKa1Cv3uyC7aCuuY7TQV7ofEtWElbVY';

export const isSupabaseConfigured = true;
export const supabase = createClient(url, key);
