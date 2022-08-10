import { supabase } from "../utils/supabaseClient";

export async function createNews({ title, body, user_id }) {
  return await supabase.from("news").insert([{ title, body, user_id }]);
}
