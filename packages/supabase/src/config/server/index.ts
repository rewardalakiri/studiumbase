import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../types";

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
