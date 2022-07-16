import { supabase } from "../supabaseClient";

export async function getNews() {
  return await supabase.from("news").select();
}
