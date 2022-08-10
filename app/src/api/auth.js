import { supabase } from "../utils/supabaseClient";

export async function createAccount({ email, password }) {
  return await supabase.auth.signUp({
    email,
    password,
  });
}

export async function login({ email, password }) {
  return await supabase.auth.signIn({
    email,
    password,
  });
}
