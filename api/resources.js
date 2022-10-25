import { config } from "dotenv";
import { createClient } from '@supabase/supabase-js'

config(); 
const supabaseUrl = process.env.DATABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function getAllResources(req, res) {
  const { data, error } = await supabase
    .from('resources')
    .select();
  if (error) {
    res.status(400).send(error);
  }
  return res.status(200).send(data);
}
