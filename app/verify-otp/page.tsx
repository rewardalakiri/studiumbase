"use client"

import { useActionState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"
import { verifyOtp } from "@/app/actions/auth"

export default function VerifyOtpPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""
  const [state, action, pending] = useActionState(verifyOtp, null)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
                <CardDescription>We sent a verification code to {email}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {state?.error && (
              <Alert variant="destructive">
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}

            <form action={action} className="space-y-4">
              <input type="hidden" name="email" value={email} />
              <div className="space-y-2">
                <Label htmlFor="token">Verification code</Label>
                <Input
                  id="token"
                  name="token"
                  type="text"
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  required
                  disabled={pending}
                  className="text-center text-lg tracking-widest"
                />
              </div>
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Verifying..." : "Verify and sign in"}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Didn't receive the code?</p>
              <Button variant="link" className="p-0 h-auto">
                <Mail className="mr-2 h-4 w-4" />
                Resend code
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
