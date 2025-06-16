import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import type {
  AuthError,
  AuthOtpResponse,
  AuthResponse,
  AuthTokenResponsePassword,
  ResendParams,
  SignInWithPasswordCredentials,
  SignInWithPasswordlessCredentials,
  SignUpWithPasswordCredentials,
  SupabaseClient,
  UserAttributes,
  UserResponse,
  VerifyOtpParams,
} from "@supabase/supabase-js";

import { createNextSSRClient } from "../config/ssr";

export async function createSupabaseSSRConnection(
  supabaseUrl: string,
  supabaseKey: string,
  cookieStore: ReadonlyRequestCookies,
) {
  const supabase: SupabaseClient = await createNextSSRClient(
    supabaseUrl,
    supabaseKey,
    cookieStore,
  );

  return {
    auth: {
      signUpPassword: (
        credentials: SignUpWithPasswordCredentials,
      ): Promise<AuthResponse> => supabase.auth.signUp(credentials),
      signInPassword: (
        credentials: SignInWithPasswordCredentials,
      ): Promise<AuthTokenResponsePassword> =>
        supabase.auth.signInWithPassword(credentials),
      signInOTP: (
        credentials: SignInWithPasswordlessCredentials,
      ): Promise<AuthOtpResponse> => supabase.auth.signInWithOtp(credentials),
      resetPassword: (
        email: string,
        options: {
          redirectTo?: string;
          captchaToken?: string;
        } = {},
      ): Promise<
        | {
            data: {};
            error: null;
          }
        | { data: null; error: AuthError }
      > => supabase.auth.resetPasswordForEmail(email, options),
      verifySentOtp: (params: VerifyOtpParams): Promise<AuthResponse> =>
        supabase.auth.verifyOtp(params),
      getCurrentUser: (jwt?: string): Promise<UserResponse> =>
        supabase.auth.getUser(jwt),
      updateCurrentUser: (
        attributes: UserAttributes,
        options: {
          emailRedirectTo?: string | undefined;
        } = {},
      ): Promise<UserResponse> => supabase.auth.updateUser(attributes, options),
      reauthenticate: (): Promise<AuthResponse> =>
        supabase.auth.reauthenticate(),
      resendOtp: (params: ResendParams): Promise<AuthResponse> =>
        supabase.auth.resend(params),
    },
  };
}
