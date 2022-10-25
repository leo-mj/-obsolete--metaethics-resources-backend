import { config } from "dotenv";
import { createClient } from '@supabase/supabase-js'

export default function connectToDB() {
    config(); 
    const supabaseUrl = process.env.DATABASE_URL
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey);
    return supabase;
}