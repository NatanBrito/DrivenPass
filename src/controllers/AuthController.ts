import { Request, Response } from "express";

import * as authServices from "../services/AuthServices.js";
import * as commomService from "../services/commomService.js";
export async function SignIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const dataVerify = await authServices.verifyExistUser(email);
  authServices.verifyPassword(password, dataVerify.password);
  const createToken = commomService.createToken({
    name: dataVerify.name,
    id: dataVerify.id,
    email: dataVerify.email,
  });
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
