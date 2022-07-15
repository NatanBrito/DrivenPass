import { Request, Response } from "express";

import * as authServices from "../services/AuthServices.js";

export async function SignIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const hashPassword = await authServices.verifyExistUser(email);
  authServices.verifyPassword(password, hashPassword);
  const createToken = authServices.createToken;

  res.status(200).send(createToken);
}
export async function SignUp(req: Request, res: Response) {
  const { name, email, password } = req.body;
  await authServices.verifyValidEmail(email);
  const encryptPassword = authServices.encryptPassword(password);
  await authServices.CreateUser({ name, email, password: encryptPassword });
  res.status(200).send("success!");
}
export default {
  SignIn,
  SignUp,
};
