// validation incoming data then pass it to the model
import * as authModel from "@/models/auth.model.js";

export const signup = async (
  email: string,
  password: string,
  username: string,
) => {
  return await authModel.signup(email, password, username);
};

export const signin = async (email: string, password: string) => {
  return await authModel.signin(email, password);
};
