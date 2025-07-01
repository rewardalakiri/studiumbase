"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { AuthForm } from "./auth-form"
import { useMobile } from "@/hooks/use-mobile"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AuthModal() {
  const router = useRouter()
  const isMobile = useMobile()
  const [open, setOpen] = useState(true)

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      router.back()
    }
  }

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={handleOpenChange}>
        <DrawerContent className="max-h-[90vh]">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Sign In</h2>
            <Button variant="ghost" size="sm" onClick={() => handleOpenChange(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4 pb-8">
            <AuthForm isModal={true} />
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        <AuthForm isModal={true} />
      </DialogContent>
    </Dialog>
  )
}
