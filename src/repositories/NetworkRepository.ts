import { wifi } from "@prisma/client";
import client from "../config/dataBase.js";

export type createNetwork = Omit<wifi, "id">;

export async function CreateNetwork(data: createNetwork) {
  const verify = await client.wifi.create({ data });
  return verify;
}
export async function findByIdInNetwork(id: number, userId: number) {
  const verify = await client.wifi.findFirst({ where: { id, userId } });
  return verify;
}
export async function findAllInNetwork(userId: number) {
  const getAll = await client.wifi.findMany({ where: { userId } });
  return getAll;
}
export async function deleteByIdNetwork(id: number, userId: number) {
  return await client.wifi.deleteMany({ where: { id, userId } });
}
