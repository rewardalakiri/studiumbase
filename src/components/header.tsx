import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8">
      <div className="flex items-center space-x-2">
        <CheckCircleIcon className="h-8 w-8 text-purple-600" />
        <span className="text-xl font-semibold text-gray-900">Studiumbase</span>
      </div>
      <nav className="flex items-center space-x-8">
        <Link className={cn(buttonVariants())} href="/auth">
          Sign In{" "}
          <ArrowRightIcon className="w-6 h-6 group-hover/login:translate-x-1 transition ease-in-out duration-300" />
        </Link>
      </nav>
    </header>
  );
};
