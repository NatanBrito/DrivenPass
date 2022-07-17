import client from "../config/dataBase.js";
import { createUser } from "../repositories/authRepository.js";

export async function findByEmail(email: string) {
  const verify = await client.user.findFirst({ where: { email } });
  return verify;
}
