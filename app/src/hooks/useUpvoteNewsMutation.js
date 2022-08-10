import { useMutation, useQueryClient } from "react-query";
import { upvoteNews } from "../api/upvoteNews";

export function useUpvoteNewsMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    (arg) => {
      upvoteNews(arg);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["news"]);
      },
    }
  );
}
