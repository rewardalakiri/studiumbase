import { createServerClient as ssrClient } from "@supabase/ssr";
import { createClient as serverClient } from "@supabase/supabase-js";

export async function createSSRClient(
  supabaseUrl: string,
  publicSupabasePublishableKey: string,
  cookies: () => any,
) {
  const cookieStore = await cookies();

  return ssrClient(supabaseUrl, publicSupabasePublishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}

export function createServerClient(
  supabaseUrl: string,
  secretSupabasePublishableKey: string,
) {
  return serverClient(supabaseUrl, secretSupabasePublishableKey);
}
