import { Request, Response } from "express";

import { Encrypt } from "../utils/EncryptsData.js";
import * as CardService from "../services/CardService.js";
import { createCard } from "../repositories/CardRepository.js";

export async function createCard(req: Request, res: Response) {
  const data: createCard = req.body;
  const DataCard = {
    ...data,
    cvv: Encrypt(data.cvv),
    password: Encrypt(data.password),
    userId: res.locals.userData.id,
  };
  await CardService.createCard(DataCard);
  res.status(200).send(DataCard);
}
export async function findCard(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const userId: number = res.locals.userData.id;
  if (id === 0) {
    const getAllCredential = await CardService.findAllCards(userId);
    return res.status(200).send(getAllCredential);
  }
  const findCredential = await CardService.findByIdCards(id, userId);
  res.status(200).send(findCredential);
}
export async function deleteCard(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const userId: number = res.locals.userData.id;
  await CardService.deleteByIdCards(id, userId);
  res.sendStatus(200);
}
