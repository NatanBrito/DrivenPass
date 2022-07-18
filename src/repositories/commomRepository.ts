import { credentials } from "@prisma/client";
import client from "../config/dataBase.js";
import { createUser } from "../repositories/authRepository.js";
export type createCredentials = Omit<credentials, "id">;

export async function findByEmail(email: string) {
  const verify = await client.user.findFirst({ where: { email } });
  return verify;
}

export async function createCredential(data: createCredentials) {
  const verify = await client.credentials.create({ data });
  return verify;
}
export async function findByIdInCredentials(id: number, userId: number) {
  const verify = await client.credentials.findFirst({ where: { id, userId } });
  return verify;
}
export async function findAllInCredentials(id: number) {
  const getAll = await client.credentials.findMany({ where: { userId: id } });
  return getAll;
}
