"use client"

import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Mail, Chrome } from "lucide-react"
import { signInWithEmail, signInWithGoogle } from "@/app/actions/auth"

interface AuthFormProps {
  className?: string
  isModal?: boolean
}

export function AuthForm({ className, isModal = false }: AuthFormProps) {
  const [emailState, emailAction, emailPending] = useActionState(signInWithEmail, null)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true)
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error("Google sign-in error:", error)
    } finally {
      setIsGoogleLoading(false)
    }
  }

  const content = (
    <>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Welcome to Studiumbase</CardTitle>
        <CardDescription>Sign in to your account to create and manage assessments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {emailState?.error && (
          <Alert variant="destructive">
            <AlertDescription>{emailState.error}</AlertDescription>
          </Alert>
        )}

        <form action={emailAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              disabled={emailPending}
            />
          </div>
          <Button type="submit" className="w-full" disabled={emailPending}>
            {emailPending ? (
              <>
                <Mail className="mr-2 h-4 w-4 animate-spin" />
                Sending sign-in code...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Send sign-in code
              </>
            )}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
        >
          {isGoogleLoading ? (
            <>
              <Chrome className="mr-2 h-4 w-4 animate-spin" />
              Connecting...
            </>
          ) : (
            <>
              <Chrome className="mr-2 h-4 w-4" />
              Continue with Google
            </>
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardContent>
    </>
  )

  if (isModal) {
    return <div className="w-full">{content}</div>
  }

  return <Card className={className}>{content}</Card>
}
