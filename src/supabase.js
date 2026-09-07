import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://bonahwnoorbhqkkfnbfe.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_JdW5318dhf5s6vjgMfqQQQ_3B-Yfdck'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
