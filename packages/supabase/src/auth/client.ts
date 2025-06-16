import type {
  SupabaseClient,
  AuthChangeEvent,
  Session,
  SignOut,
  AuthError,
  AuthResponse,
  UserIdentity,
  Subscription,
} from "@supabase/supabase-js";

import { createBrowserClient } from "../config/client";

export async function createSupabaseBrowserConnection(
  supabaseUrl: string,
  supabaseKey: string,
) {
  const supabase: SupabaseClient = createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );

  return {
    auth: {
      onAuthStateChanges: (
        callback: (
          event: AuthChangeEvent,
          session: Session | null,
        ) => void | Promise<void>,
      ): { data: { subscription: Subscription } } =>
        supabase.auth.onAuthStateChange(callback),
      signOutUser: (options?: SignOut): Promise<{ error: AuthError | null }> =>
        supabase.auth.signOut(options),
      getCurrentUserSession: (): Promise<
        | { data: { session: Session }; error: null }
        | { data: { session: null }; error: AuthError }
        | { data: { session: null }; error: null }
      > => supabase.auth.getSession(),
      getNewUserSession: (currentSession?: {
        refresh_token: string;
      }): Promise<AuthResponse> => supabase.auth.refreshSession(currentSession),
      getUserIdentities: (): Promise<
        | {
            data: {
              identities: UserIdentity[];
            };
            error: null;
          }
        | { data: null; error: AuthError }
      > => supabase.auth.getUserIdentities(),
    },
  };
}
