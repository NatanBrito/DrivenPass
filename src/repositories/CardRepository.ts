import { cards } from "@prisma/client";
import client from "../config/dataBase.js";

export type createCard = Omit<cards, "id">;

export async function CreateCard(data: createCard) {
  const verify = await client.cards.create({ data });
  return verify;
}
export async function findByIdInCard(id: number, userId: number) {
  const verify = await client.cards.findFirst({ where: { id, userId } });
  return verify;
}
export async function findAllInCard(userId: number) {
  const getAll = await client.cards.findMany({ where: { userId } });
  return getAll;
}
export async function deleteByIdCard(id: number, userId: number) {
  return await client.cards.deleteMany({ where: { id, userId } });
}
