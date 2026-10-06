import { createServerClient } from "@supabase/ssr";
import type { Request, Response } from "express";
import type { CookieOptions } from "express";

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublicKey = process.env.SUPABASE_PUBLIC_KEY;

if (!supabaseUrl || !supabasePublicKey) {
  throw new Error("Missing Supabase environment variables");
}

export const createSupabaseSSRClient = (req: Request, res: Response) => {
  return createServerClient(supabaseUrl, supabasePublicKey, {
    cookies: {
      getAll() {
        return Object.entries(req.cookies).map(([name, value]) => ({
          name,
          value,
        }));
      },

      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          res.cookie(name, value, options as CookieOptions);
        });
      },
    },
  });
};
