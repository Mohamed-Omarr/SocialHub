//  define return value to the api response
import type { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const { data, error } = await authService.signup(email, password, name);

  if (error) {
    return res.status(error.status || 400).json({
      message: error.message,
    });
  }

  return res.status(201).json({
    user: data.user,
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
    user: data.user,
    session: data.session.access_token,
  });
};
