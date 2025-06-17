"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { EmailInput } from "@/modules/components/email-input";
import { Button } from "@repo/ui/ui/button";
import { Form, FormField } from "@repo/ui/ui/form";
import { emailSchema, passwordSchema } from "@repo/lib/schemas";
import { PasswordInput } from "@/modules/components/password-input";

const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mx-auto min-h-screen flex flex-col gap-8 items-center justify-center w-full max-w-sm">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => <EmailInput {...field} />}
          />

          <FormField
            name="password"
            render={({ field }) => <PasswordInput field={field} />}
          />

          <div className="flex flex-col gap-3 w-full">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
