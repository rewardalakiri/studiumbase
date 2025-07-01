"use client"

import { usePathname } from "next/navigation"

export function DebugInfo() {
  const pathname = usePathname()

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs z-50">Path: {pathname}</div>
}
