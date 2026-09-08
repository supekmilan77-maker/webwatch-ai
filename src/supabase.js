import { createClient } from '@supabase/supabase-js'

const rawUrl = import.meta.env.VITE_SUPABASE_URL
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseUrl = (rawUrl && rawUrl.trim() !== '') 
  ? rawUrl 
  : 'https://bonahwnoorbhqkkfnbfe.supabase.co'

const supabaseAnonKey = (rawKey && rawKey.trim() !== '') 
  ? rawKey 
  : 'sb_publishable_JdW5318dhf5s6vjgMfqQQQ_3B-Yfdck'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
