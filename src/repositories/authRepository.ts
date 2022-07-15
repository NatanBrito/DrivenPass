import client from "../config/dataBase.js";
import { User } from "@prisma/client";

export type createUser = Omit<User, "id">;

export async function findEmailByEmail(email: string) {
  const verify = await client.user.findFirst({ where: { email } });
  return verify;
}
export async function Create(data: createUser) {
  const create = await client.user.create({ data });
  return create;
}
