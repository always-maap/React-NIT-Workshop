import NewsCard from "../components/NewsCard";
import { useNewsQuery } from "../hooks/useNewsQuery";

export default function App() {
  const newsQuery = useNewsQuery();

  if (newsQuery.status === "loading") {
    return <div>Loading...</div>;
  }

  if (newsQuery.status !== "success") {
    return <div>Error</div>;
  }

  function onLoadMore() {
    newsQuery.fetchNextPage();
  }

  const newsPage = newsQuery.data.pages;

  return (
    <div className="flex flex-col">
      {newsPage.map((page) => {
        return page.data.map((news, newsIndex) => (
          <NewsCard
            key={news.id}
            id={news.id}
            no={newsIndex + 1}
            title={news.title}
            upvote={news.upvote}
            createdAt={news.created_at}
          />
        ));
      })}
      {newsQuery.hasNextPage && (
        <button className="p-2" onClick={onLoadMore}>
          load more ↓
        </button>
      )}
    </div>
  );
}
