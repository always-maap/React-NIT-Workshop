import { supabase } from "../utils/supabaseClient";

export async function createNews({ title, body }) {
  return await supabase.from("news").insert([{ title, body }]);
}
