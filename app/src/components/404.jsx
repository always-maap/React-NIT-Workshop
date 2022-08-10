import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p>Opps... Couldn't find pal. Back to the road!</p>
      <Link to="/" className="text-blue-500">
        Home 🔙
      </Link>
    </div>
  );
}
