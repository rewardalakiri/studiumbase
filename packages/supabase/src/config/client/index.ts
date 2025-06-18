import { createBrowserClient as createClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../../types/db-generated";

export function createBrowserClient(
  supabaseUrl: string,
  supabaseKey: string,
): SupabaseClient {
  return createClient<Database>(supabaseUrl, supabaseKey);
}
