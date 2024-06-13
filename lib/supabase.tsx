import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yfuosxhlcbozqucpasfp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmdW9zeGhsY2JvenF1Y3Bhc2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwODEwNTAsImV4cCI6MjAzMzY1NzA1MH0.xsG-T8ZD7GP6ejvSufwbKSCcCBPaHOrJ6eOh6703qlc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})