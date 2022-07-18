import * as commomRepository from "../repositories/commomRepository.js";

import { createCredentials } from "../repositories/commomRepository.js";

export async function createCredentials(
  data: commomRepository.createCredentials
) {
  const verify = await commomRepository.createCredential(data);
  return verify;
}
