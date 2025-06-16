import { createBrowserClient as createClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../types/db-generated";

export function createBrowserClient(
  supabaseUrl: string,
  supabaseKey: string,
): SupabaseClient {
  return createClient<Database>(supabaseUrl, supabaseKey);
}
