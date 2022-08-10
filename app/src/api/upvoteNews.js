import { supabase } from "../utils/supabaseClient";

export async function upvoteNews({ id, upvote }) {
  return await supabase
    .from("news")
    .update({ upvote: upvote + 1 })
    .eq("id", id);
}
