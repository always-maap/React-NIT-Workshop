import { supabase } from "../utils/supabaseClient";

export async function upvoteNews({ id, upvote }) {
  return await supabase
    .from("upvote")
    .update({ value: upvote + 1 })
    .eq("id", id);
}
