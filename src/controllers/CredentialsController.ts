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
  res.sendStatus(200);
}
export async function findCredential(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const userId: number = res.locals.userData.id;
  if (id === 0) {
    const getAllCredential = await credentialService.findAllCredential(userId);
    return res.status(200).send(getAllCredential);
  }
  const findCredential = await credentialService.findByIdCredential(id, userId);
  res.status(200).send(findCredential);
}
export async function deleteCredential(req: Request, res: Response) {
  res.sendStatus(201);
}
