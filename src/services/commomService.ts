import dotenv from "dotenv";
import jwt from "jsonwebtoken";

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
  const verify = jwt.verify(token, process.env.JWTpass);
  return verify;
}
