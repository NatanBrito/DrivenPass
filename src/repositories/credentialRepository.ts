import client from "../config/dataBase.js";
import { createCredentials } from "./commomRepository.js";

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
export async function deleteByIdCredential(id: number, userId: number) {
  return await client.credentials.deleteMany({ where: { id, userId } });
}
