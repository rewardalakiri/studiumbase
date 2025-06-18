import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../../types/db-generated";

export async function createServerClient(
  supabaseUrl: string,
  supabaseAnonKey: string,
): Promise<SupabaseClient> {
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      detectSessionInUrl: false,
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
