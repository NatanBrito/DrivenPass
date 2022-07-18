import * as createRepository from "../repositories/credentialRepository.js";

import { createCredentials } from "../repositories/commomRepository.js";
import { DecryptPass } from "../utils/EncryptsData.js";

export async function createCredentials(data: createCredentials) {
  const verify = await createRepository.createCredential(data);
  return verify;
}
export async function findByIdCredential(id: number, userId: number) {
  const find = await createRepository.findByIdInCredentials(id, userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "unauthorized Credential",
    };
  }
  return { ...find, password: DecryptPass(find.password) };
}

export async function findAllCredential(id: number) {
  const allCredential = await createRepository.findAllInCredentials(id);
  const getWithPass = allCredential.map((credential) => {
    delete credential.userId;
    return { ...credential, password: DecryptPass(credential.password) };
  });
  return getWithPass;
}

export async function deleteByIdCredential(id: number, userId: number) {
  const find = await createRepository.findByIdInCredentials(id, userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "unauthorized Credential",
    };
  }
  return await createRepository.deleteByIdCredential(id, userId);
}
