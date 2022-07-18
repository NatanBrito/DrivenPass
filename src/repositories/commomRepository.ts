import { credentials } from "@prisma/client";
import client from "../config/dataBase.js";
import { createUser } from "../repositories/authRepository.js";

export async function findByEmail(email: string) {
  const verify = await client.user.findFirst({ where: { email } });
  return verify;
}
export type createCredentials = Omit<credentials, "id">;

export async function createCredential(data: createCredentials) {
  const verify = await client.credentials.create({ data });
  return verify;
}
