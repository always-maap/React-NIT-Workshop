import { supabase } from "../utils/supabaseClient";
import { getPagination } from "../utils/getPagination";
import { PAGE_LIMIT } from "../utils/constants";

export async function getNews(page) {
  const { from, to } = getPagination(page, PAGE_LIMIT);
  return await supabase
    .from("news")
    .select("id, title, created_at, upvote(value)")
    .range(from, to);
}
