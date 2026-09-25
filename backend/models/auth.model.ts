import { supabase } from "../src/lib/supabase";

export const signup = async (email: string, password: string, username: string) => {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });
};

export const signin = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};
