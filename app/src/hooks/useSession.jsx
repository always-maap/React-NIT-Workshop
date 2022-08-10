import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../utils/supabaseClient";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.user());

  useEffect(() => {
    const getUserProfile = async () => {
      const sessionUser = supabase.auth.user();

      if (sessionUser) {
        setUser(sessionUser);
      }
    };

    getUserProfile();

    supabase.auth.onAuthStateChange(() => {
      getUserProfile();
    });
  }, []);

  return (
    <Context.Provider value={{ session: user, setSession: setUser }}>
      {children}
    </Context.Provider>
  );
};

export const useSession = () => useContext(Context);

export default Provider;
