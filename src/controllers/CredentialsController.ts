import { Request, Response } from "express";

import { createCredentials } from "../repositories/commomRepository.js";
import * as credentialService from "../services/credentialsService.js";
import * as encryptUtils from "../utils/EncryptsData.js";

export async function createCredentials(req: Request, res: Response) {
  const { url, password, title, titleCredential, credentialUser } = req.body;
  const dataToken = res.locals.userData;
  const cryptPassword = encryptUtils.EncryptPassword(password);
  const data: createCredentials = {
    userId: dataToken.id,
    title: title,
    url: url,
    titleCredential: titleCredential,
    credentialUser,
    password: cryptPassword,
  };
  await credentialService.createCredentials(data);
  res.status(200).send("{ ...data }");
}
