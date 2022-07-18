import { Link } from "react-router-dom";
import Container from "./Container";
import LogoSVG from "./LogoSVG";

function Logo() {
  return (
    <Link to="/" className="flex justify-between items-center gap-2">
      <LogoSVG />
      <div className="flex items-center text-white text-xl">NIT News</div>
    </Link>
  );
}

export default function Layout(props) {
  return (
    <>
      <div className="bg-blue-500">
        <Container>
          <nav className="w-full flex justify-between items-center py-4">
            <Logo />
            <Link to="/create" className="text-white border-2 py-1 px-2">
              New ✏️
            </Link>
          </nav>
        </Container>
      </div>

      <main className="py-4">
        <Container>
          <div className="border-2 rounded bg-white w-full p-2">
            {props.children}
          </div>
        </Container>
      </main>
    </>
  );
}
