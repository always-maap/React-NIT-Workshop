import { supabase } from "../utils/supabaseClient";

export async function getPost(id) {
  return await supabase.from("news").select().eq("id", id).single();
}
