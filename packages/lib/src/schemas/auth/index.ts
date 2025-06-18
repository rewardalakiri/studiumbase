import { z, type ZodString } from "zod";

export const usernameSchema: ZodString = z
  .string()
  .min(5, "Username must be at least 5 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Only letters, numbers, and underscores are allowed",
  );

export const emailSchema: ZodString = z.string().email({
  message: "Email address is required",
});

export const passwordSchema: ZodString = z.string().min(6, {
  message: "Password must be at least 6 characters",
});
