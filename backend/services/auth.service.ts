// validation incoming data then pass it to the model 
import * as authModel from "../models/auth.model";

export const signup = async (email: string, password: string, name: string) => {
  return await authModel.signup(email, password, name);
};

export const signin = async (email: string, password: string) => {
  return await authModel.signin(email, password);
};
