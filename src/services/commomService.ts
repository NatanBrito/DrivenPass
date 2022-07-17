import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import * as commomRepositorys from "../repositories/commomRepository.js";
dotenv.config();

export interface dataJWT {
  name: string;
  id: number;
  email: string;
}

export function createToken(data: dataJWT) {
  const generate = jwt.sign(data, process.env.JWTpass);
  return generate;
}
export function decryptToken(token: string) {
  const verify: dataJWT = jwt.verify(token, process.env.JWTpass);
  return verify;
}
export async function verifyValidEmail(email: string) {
  const validateEmail = await commomRepositorys.findByEmail(email);
  if (validateEmail) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "not found User",
    };
  }
  return true;
}
