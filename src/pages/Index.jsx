import { getNews } from "../api/getNews";
import { useQuery } from "react-query";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";

export default function App() {
  const newsQuery = useQuery(["news"], getNews);

  if (newsQuery.status === "loading") {
    return <div>Loading...</div>;
  }

  if (newsQuery.status !== "success") {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col">
      {newsQuery.data.data.map((news, index) => (
        <Link to={`/${news.id}`} key={news.id}>
          <NewsCard
            no={index + 1}
            title={news.title}
            upvote={news.upvote}
            createdAt={news.created_at}
          />
        </Link>
      ))}
    </div>
  );
}
