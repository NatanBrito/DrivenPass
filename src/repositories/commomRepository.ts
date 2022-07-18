import { credentials } from "@prisma/client";
import client from "../config/dataBase.js";
export type createCredentials = Omit<credentials, "id">;

export async function findByEmail(email: string) {
  const verify = await client.user.findFirst({ where: { email } });
  return verify;
}
