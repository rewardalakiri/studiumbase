"use client";

import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

import { Input } from "@repo/ui/ui/input";
import { Button } from "@repo/ui/ui/button";
import { EyeIcon, EyeOffIcon } from "@repo/ui/icons";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/ui/form";

type PasswordInputProps = {
  LinkComponent?: React.ComponentType<{
    href: string;
    children: React.ReactNode;
  }>;
  field: ControllerRenderProps;
};

export const PasswordInput = ({ LinkComponent, field }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const ForgotPasswordLink = LinkComponent ?? "a";

  return (
    <FormItem className="flex flex-col gap-2 w-full max-w-sm">
      <div className="flex items-center">
        <FormLabel>Password</FormLabel>
        <ForgotPasswordLink
          href="/forgot-password"
          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
        >
          Forgot your password?
        </ForgotPasswordLink>
      </div>
      <div className="relative w-full">
        <FormControl>
          <Input type={showPassword ? "text" : "password"} {...field} />
        </FormControl>{" "}
        <Button
          type="button"
          variant="ghost"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </Button>
      </div>
      <FormMessage />
    </FormItem>
  );
};
