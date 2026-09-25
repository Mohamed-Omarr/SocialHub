import type { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const signup = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  const { data, error } = await authService.signup(email, password, username);

  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  return res.status(201).json({
    user: data.user,
    session: data.session,
  });
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { data, error } = await authService.signin(email, password);

  if (error) {
    return res.status(401).json({
      message: error.message,
    });
  }

  return res.status(200).json({
    user: data.user,
    session: data.session,
  });
};
