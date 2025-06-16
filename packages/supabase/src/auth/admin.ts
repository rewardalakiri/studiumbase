import { createAdminClient } from "../config/admin";
import type {
  SupabaseClient,
  UserResponse,
  AuthError,
  PageParams,
  Pagination,
  User,
  AdminUserAttributes,
  GenerateLinkParams,
  GenerateLinkResponse,
} from "@supabase/supabase-js";

export async function createSupabaseAdminConnection(
  supabaseUrl: string,
  supabaseRoleKey: string,
) {
  const supabase: SupabaseClient = await createAdminClient(
    supabaseUrl,
    supabaseRoleKey,
  );

  return {
    auth: {
      getUserById: (uid: string): Promise<UserResponse> =>
        supabase.auth.admin.getUserById(uid),
      listAllUsers: (
        params?: PageParams,
      ): Promise<
        | { data: { users: User[]; aud: string } & Pagination; error: null }
        | { data: { users: [] }; error: AuthError }
      > => supabase.auth.admin.listUsers(params),
      createUser: (attributes: AdminUserAttributes): Promise<UserResponse> =>
        supabase.auth.admin.createUser(attributes),
      deleteUser: (
        id: string,
        shouldSoftDelete = false,
      ): Promise<UserResponse> =>
        supabase.auth.admin.deleteUser(id, shouldSoftDelete),
      sendEmailInviteLink: (
        email: string,
        options: {
          data?: object;
          redirectTo?: string;
        } = {},
      ): Promise<UserResponse> =>
        supabase.auth.admin.inviteUserByEmail(email, options),
      generateLink: (
        params: GenerateLinkParams,
      ): Promise<GenerateLinkResponse> =>
        supabase.auth.admin.generateLink(params),
      updateUser: (
        uid: string,
        attributes: AdminUserAttributes,
      ): Promise<UserResponse> =>
        supabase.auth.admin.updateUserById(uid, attributes),
    },
  };
}
