import * as commomRepository from "../repositories/commomRepository.js";

import { createCredentials } from "../repositories/commomRepository.js";

export async function createCredentials(
  data: commomRepository.createCredentials
) {
  const verify = await commomRepository.createCredential(data);
  return verify;
}
export async function findByIdInTable(id: number) {
  const find = await commomRepository.findByIdInCredentials(id);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "not found your Credential",
    };
  }
  return find;
}
