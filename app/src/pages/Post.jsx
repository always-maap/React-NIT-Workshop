import { getPost } from "../api/getPost";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { marked } from "marked";
import NotFound from "../components/404";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const postQuery = useQuery(["news", id], () => getPost(id));

  if (postQuery.status === "loading") {
    return <div>Loading...</div>;
  }
  if (postQuery.status !== "success") {
    return <div>Error</div>;
  }

  if (postQuery.data.status !== 200) {
    return <NotFound />;
  }

  console.log(postQuery);

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
