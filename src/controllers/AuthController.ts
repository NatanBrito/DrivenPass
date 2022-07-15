import { Request, Response } from "express";
import bcrypt from "bcrypt";

import * as authServices from "../services/AuthServices.js";

export async function SignIn(req: Request, res: Response) {
  // const volta = bcrypt.compareSync("password", teste);
  res.sendStatus(200);
}
export async function SignUp(req: Request, res: Response) {
  const { name, email, password } = req.body;
  await authServices.verifyValidEmail(email);
  const saltRound = 10;
  const encryptPassword = bcrypt.hashSync(password, saltRound);
  await authServices.CreateUser({ name, email, password: encryptPassword });
  res.status(200).send("success!");
}
export default {
  SignIn,
  SignUp,
};
