import client from "../config/dataBase.js";
import { User } from "@prisma/client";

export type createUser = Omit<User, "id">;

export async function CreateUser(data: createUser) {
  const create = await client.user.create({ data });
  return create;
}
