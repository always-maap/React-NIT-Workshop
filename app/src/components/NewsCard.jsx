import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useUpvoteNewsMutation } from "../hooks/useUpvoteNewsMutation";

export default function NewsCard(props) {
  const { id, no, title, upvote, createdAt } = props;
  const upvoteMutation = useUpvoteNewsMutation();

  function onUpvote() {
    upvoteMutation.mutate({ id, upvote });
  }

  return (
    <div className="flex items-center py-4 border-solid border-b">
      <span>
        {no}
        <button className="mx-2" onClick={onUpvote}>
          🔺
        </button>
      </span>
      <Link to={`/${id}`}>
        <div className="flex flex-col">
          <h1 className="text-xl font-medium">{title}</h1>
          <span className="font-light text-slate-500">
            {upvote} points | {dayjs().from(dayjs(createdAt))}
          </span>
        </div>
      </Link>
    </div>
  );
}
