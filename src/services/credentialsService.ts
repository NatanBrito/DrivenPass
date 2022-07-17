import * as commomRepository from "../repositories/commomRepository.js";

import { createCredentials } from "../repositories/commomRepository.js";

export async function createCredentials() {
  const verify = await commomRepository.testeSeAchaTitle({});
  return verify;
}
