import { createBrowserClient as createClient } from "@supabase/ssr";
import { Database } from "../../types";
import { SupabaseClient } from "@supabase/supabase-js";

export function createBrowserClient(
  supabaseUrl: string,
  supabaseKey: string,
): SupabaseClient {
  return createClient<Database>(supabaseUrl, supabaseKey);
}
