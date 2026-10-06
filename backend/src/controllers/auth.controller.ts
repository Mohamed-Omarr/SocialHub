//  define return value to the api response
import type { Request, Response } from "express";
import * as authService from "@/services/auth.service.js";

export const signup = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  const { data, error } = await authService.signup(email, password, username);

  if (error) {
    return res.status(error.status || 400).json({
      message: error.message,
    });
  }

  return res.status(201).json({
    session: data.session?.access_token,
  });
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { data, error } = await authService.signin(email, password);

  if (error) {
    return res.status(error.status || 401).json({
      message: error.message,
    });
  }

  return res.status(200).json({
    session: data.session.access_token,
  });
};
