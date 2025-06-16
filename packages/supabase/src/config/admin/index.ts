import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../types";

export async function createAdminClient(
  supabaseUrl: string,
  supabaseServiceRoleKey: string,
): Promise<SupabaseClient> {
  return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
