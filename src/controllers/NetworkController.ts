import { Request, Response } from "express";

import * as NetworkService from "../services/NetworkService.js";
import { Encrypt } from "../utils/EncryptsData.js";
import { createNetwork } from "../repositories/NetworkRepository.js";

export async function createNetwork(req: Request, res: Response) {
  const data: { title: string; nameNetwork: string; passwordNetwork: string } =
    req.body;
  const DataNetwork: createNetwork = {
    ...data,
    passwordNetwork: Encrypt(data.passwordNetwork),
    userId: res.locals.userData.id,
  };
  await NetworkService.createNetwork(DataNetwork);
  res.status(200).send(DataNetwork);
}
export async function findNetwork(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const userId: number = res.locals.userData.id;
  if (id === 0) {
    const getAllCredential = await NetworkService.findAllNetwork(userId);
    return res.status(200).send(getAllCredential);
  }
  const findCredential = await NetworkService.findByIdNetwork(id, userId);
  res.status(200).send(findCredential);
}
export async function deleteNetwork(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const userId: number = res.locals.userData.id;
  await NetworkService.deleteByIdNetwork(id, userId);
  res.sendStatus(200);
}
