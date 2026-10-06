// communicate with database (supabase)
import { supabase } from "@/lib/supabase.js";

export const signup = async (
  email: string,
  password: string,
  username: string,
) => {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: username,
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
