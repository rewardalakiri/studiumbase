"use server";

export async function loginAction(
  prevState: { error?: string },
  formData: FormData,
) {
  const username = formData.get("username")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  console.log("Submitted:", { username, email, password });

  if (!username || !email || !password) {
    return { error: "All fields are required." };
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return { error: "Invalid email format." };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters." };
  }

  // simulate successful login or real logic here
  return { error: undefined }; // No error = success
}
