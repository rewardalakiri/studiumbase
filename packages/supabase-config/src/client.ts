import { createBrowserClient as createClient } from '@supabase/ssr'

export function createBrowserClient() {
    return createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!
    )
}