import { getNews } from "../api/getNews";
import { useInfiniteQuery } from "react-query";

export function useNewsQuery() {
  return useInfiniteQuery(["news"], ({ pageParam = 0 }) => getNews(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.length < 1) {
        return;
      }
      return allPages.length;
    },
    keepPreviousData: true,
  });
}
