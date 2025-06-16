# 🛠️ @repo/supabase

A shared configuration and utility package for interacting with [Supabase](https://supabase.com) across Studiumbase.

This package centralizes all Supabase-related logic: client setup, auth helpers, storage utilities, edge function invocations, realtime handlers, and more — allowing consistent and type-safe Supabase usage across browser, server, and Next.js SSR environments.

---

## ✅ Features

- 🔐 **Auth Utilities**  
  Handle login, logout, session retrieval, and role-based logic with shared helpers.

- ☁️ **Storage Helpers**  
  Upload, download, and manage Supabase Storage buckets easily.

- 🛰️ **Edge Functions**  
  Invoke Supabase edge functions securely with shared auth context.

- 🔄 **Realtime**  
  Subscribe to database changes (Postgres changes) via the Supabase Realtime API.

- 🌍 **Client Instantiation**  
  Utilities for browser (`createBrowserClient`), server (`createServerClient`), and SSR environments (`createSSRClient` for Next.js using `headers()` and `cookies()`).

- 🧩 **Shared Types**  
  Full access to your generated Supabase types for type-safe development throughout the monorepo.

---

## 📦 Installation

This is a **local package** intended to be used within your this project. Install as a dependency.

```ts
npm i @repo/supabase
