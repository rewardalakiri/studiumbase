import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../../types/db-generated";

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
