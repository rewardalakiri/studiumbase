import type { ControllerRenderProps } from "react-hook-form";

import { Input } from "@repo/ui/ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/ui/form";

export const EmailInput = (field: ControllerRenderProps) => {
  return (
    <FormItem className="flex flex-col gap-2 w-full max-w-sm items-start">
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="m@example.com" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
