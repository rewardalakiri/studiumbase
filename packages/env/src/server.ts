import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/v4";

export const env = createEnv({
  server: {
    SECRET_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
    OPEN_AI_API_KEY: z.string().min(1),
    DATABASE_URL: z.string().url(),
  },
  runtimeEnv: process.env,
});
