import { createClient } from "@/backend/supabase/server";

export const createContext = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { supabase, user };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
