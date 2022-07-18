import * as commomRepository from "../repositories/commomRepository.js";

import { createCredentials } from "../repositories/commomRepository.js";
import { DecryptPassword } from "../utils/EncryptsData.js";

export async function createCredentials(
  data: commomRepository.createCredentials
) {
  const verify = await commomRepository.createCredential(data);
  return verify;
}
export async function findByIdCredential(id: number, userId: number) {
  const find = await commomRepository.findByIdInCredentials(id, userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "unauthorized Credential",
    };
  }
  return { ...find, password: DecryptPassword(find.password) };
}

export async function findAllCredential(id: number) {
  const allCredential = await commomRepository.findAllInCredentials(id);
  const getWithPass = allCredential.map((credential) => {
    delete credential.userId;
    return { ...credential, password: DecryptPassword(credential.password) };
  });
  return getWithPass;
}
