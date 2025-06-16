"use client";

import { ReactNode } from "react";
import { NextThemesProvider } from "@repo/ui/themes/next-themes-provider";

export function Providers({ children }: { children: ReactNode }) {
  return <NextThemesProvider>{children}</NextThemesProvider>;
}
