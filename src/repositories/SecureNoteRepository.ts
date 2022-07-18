import { secureNotes } from "@prisma/client";

import client from "../config/dataBase.js";

export type createNote = Omit<secureNotes, "id">;

export async function createSecureNote(data: createNote) {
  const verify = await client.secureNotes.create({ data });
  return verify;
}

export async function findByIdInSecureNote(id: number, userId: number) {
  const verify = await client.secureNotes.findFirst({ where: { id, userId } });
  return verify;
}
export async function findAllInSecureNote(id: number) {
  const getAll = await client.secureNotes.findMany({ where: { userId: id } });
  return getAll;
}
export async function deleteByIdSecureNote(id: number, userId: number) {
  return await client.secureNotes.deleteMany({ where: { id, userId } });
}
