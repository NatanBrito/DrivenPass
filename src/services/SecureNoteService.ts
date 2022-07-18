import * as SecurenoteRepository from "../repositories/SecureNoteRepository.js";

export async function createCredentials(data: SecurenoteRepository.createNote) {
  const verify = await SecurenoteRepository.createSecureNote(data);
  return verify;
}
export async function findAllSecureNote(id: number, userId: number) {
  const find = await SecurenoteRepository.findAllInSecureNote(userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "not found any Notes",
    };
  }
  return find;
}

export async function findSecureNote(id: number, userId: number) {
  const allCredential = await SecurenoteRepository.findByIdInSecureNote(
    id,
    userId
  );
  return allCredential;
}

export async function deleteByIdSecureNote(id: number, userId: number) {
  const find = await SecurenoteRepository.findByIdInSecureNote(id, userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "unauthorized process",
    };
  }
  return await SecurenoteRepository.deleteByIdSecureNote(id, userId);
}
