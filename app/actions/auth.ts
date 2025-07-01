"use server"

import { createServerClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"

export async function signInWithEmail(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { error: "Email is required" }
  }

  const supabase = await createServerClient()

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  })

  if (error) {
    return { error: error.message }
  }

  redirect("/verify-otp?email=" + encodeURIComponent(email))
}

export async function verifyOtp(formData: FormData) {
  const email = formData.get("email") as string
  const token = formData.get("token") as string

  if (!email || !token) {
    return { error: "Email and verification code are required" }
  }

  const supabase = await createServerClient()

  const { error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  })

  if (error) {
    return { error: error.message }
  }

  redirect("/dashboard")
}

export async function signInWithGoogle() {
  const supabase = await createServerClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  if (data.url) {
    redirect(data.url)
  }
}

export async function signOut() {
  const supabase = await createServerClient()
  await supabase.auth.signOut()
  redirect("/")
}
