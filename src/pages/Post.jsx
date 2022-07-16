import { getPost } from "../api/getPost";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const postQuery = useQuery(["news", id], () => getPost(id));

  if (postQuery.status === "loading") {
    return <div>Loading...</div>;
  }
  if (postQuery.status !== "success") {
    return <div>Error</div>;
  }

  const { title, body } = postQuery.data.data;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
