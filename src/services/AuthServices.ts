import bcrypt from "bcrypt";

import * as repository from "../repositories/authRepository.js";
import { createUser } from "../repositories/authRepository.js";

export async function verifyValidEmail(email: string) {
  const verify = await repository.findEmailByEmail(email);
  if (verify) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "E-mail has already register",
    };
  }
  return true;
}

export async function CreateUser(data: createUser) {
  await repository.Create(data);
  return true;
}
export async function verifyExistUser(email: string) {
  const verify = await repository.findEmailByEmail(email);
  if (!verify) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "not found user register",
    };
  }
  return verify;
}
export function verifyPassword(password: string, hashPassword: string) {
  const verifyPass = bcrypt.compareSync(password, hashPassword);
  if (!verifyPass) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "email or password invalid",
    };
  }
  return verifyPass;
}
export function encryptPassword(password: string) {
  const saltRound = 10;
  const encryptPassword = bcrypt.hashSync(password, saltRound);
  return encryptPassword;
}
