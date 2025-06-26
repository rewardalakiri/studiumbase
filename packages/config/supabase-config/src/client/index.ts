import { createBrowserClient as createClient } from "@supabase/ssr";

export function createBrowserClient(
  supabaseUrl: string,
  publicSupabasePublishableKey: string,
) {
  return createClient(supabaseUrl, publicSupabasePublishableKey);
}
