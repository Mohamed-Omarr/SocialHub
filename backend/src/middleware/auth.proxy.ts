import type { NextFunction, Request, Response } from "express";
import { createSupabaseSSRClient } from "@/lib/supabase-ssr.js";

export const authProxy = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const supabase = createSupabaseSSRClient(req, res);

    const { data, error } = await supabase.auth.getClaims();

    if (error || !data?.claims) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    res.locals.auth = data.claims;

    next();
  } catch (error) {
    console.error("Auth proxy error:", error);

    return res.status(500).json({
      message: "Authentication failed",
    });
  }
};
