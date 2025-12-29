
import { createClient } from '@supabase/supabase-js';

// URL de ton projet Supabase
const supabaseUrl = 'https://raqoyoihigtqxlgpwzzz.supabase.co';

// ATTENTION : Cette clé DOIT être la clé "anon" "public" trouvée dans 
// Settings > API de ton tableau de bord Supabase. 
// Elle doit commencer par "eyJ..."
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhcW95b2loaWd0cXhsZ3B3enp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwMDQ2NDcsImV4cCI6MjA4MjU4MDY0N30.SZlckWCqulLb8tZHrSx3UWg9RN9LdAq7ekllJADRAnc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
