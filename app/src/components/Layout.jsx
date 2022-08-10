import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import { useSession } from "../hooks/useSession";
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
  const navigate = useNavigate();
  const { session, setSession } = useSession();

  async function onSignOut() {
    await supabase.auth.signOut();
    setSession(null);
    navigate("/");
  }

  return (
    <>
      <div className="bg-blue-500">
        <Container>
          <nav className="w-full flex justify-between items-center py-4">
            <Logo />
            <div>
              {session ? (
                <>
                  <button
                    onClick={onSignOut}
                    className="text-white border-2 py-1 px-2 ml-2"
                  >
                    Sign Out
                  </button>
                  <Link
                    to="/create"
                    className="text-white border-2 py-1 px-2 ml-2"
                  >
                    New ✏️
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-up"
                    className="text-white border-2 py-1 px-2 ml-2"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/sign-in"
                    className="text-white border-2 py-1 px-2 ml-2"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
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
