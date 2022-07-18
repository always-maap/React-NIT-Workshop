import { getPost } from "../api/getPost";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { marked } from "marked";

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
      <h1 className="font-medium text-2xl border-b-2 py-2 my-2">{title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: marked(body) }}
      />
    </div>
  );
}
