import { createNews } from "../api/createNews";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export function useCreateNewsMutation() {
  const navigate = useNavigate();

  return useMutation((arg) => createNews(arg), {
    onSuccess: (res) => {
      navigate(`/${res.data[0].id}`);
    },
  });
}
