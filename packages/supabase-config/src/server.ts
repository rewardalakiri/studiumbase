import { createClient } from "@supabase/supabase-js";

/**
 * For use in server environments, but not for SSR Frameworks, and not in a browser environment.
 */
export function createServerClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );
}
