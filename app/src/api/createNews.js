import { supabase } from "../utils/supabaseClient";

export async function createNews({ title, body, user_id }) {
  const news = await supabase.from("news").insert([{ title, body, user_id }]);
  await supabase.from("upvote").insert({ id: news.data[0].id, value: 0 });
  return news;
}
