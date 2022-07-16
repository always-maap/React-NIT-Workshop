export default function NewsCard(props) {
  const { no, title, upvote, createdAt } = props;

  return (
    <div className="flex">
      <span>
        {no} {upvote}🔺
      </span>
      <div className="flex flex-col">
        {title} {createdAt}
      </div>
    </div>
  );
}
