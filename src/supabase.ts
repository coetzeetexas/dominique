import { createClient, SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = !!(url && key);

// Only instantiate if env vars are present — avoids crashing the whole app on load
export const supabase: SupabaseClient = isSupabaseConfigured
  ? createClient(url!, key!)
  : (null as unknown as SupabaseClient);
