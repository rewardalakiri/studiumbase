"use client";

import { NextThemesProvider } from "@repo/ui/themes/next-themes-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider>{children}</NextThemesProvider>;
}
