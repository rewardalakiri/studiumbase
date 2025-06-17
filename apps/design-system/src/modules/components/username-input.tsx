import { Label } from "@repo/ui/ui/label";
import { Input } from "@repo/ui/ui/input";

export const UsernameInput = () => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <Label htmlFor="username">Username</Label>
      <div className="flex items-center border rounded-md px-3 shadow-sm focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]">
        <span className="text-gray-500 text-lg">@</span>
        <Input
          id="username"
          type="text"
          className="border-none shadow-none ring-0 outline-none focus:border-none focus:shadow-none focus:ring-0 focus-visible:ring-0 focus-visible:border-none active:border-none active:ring-0"
        />
      </div>
    </div>
  );
};
