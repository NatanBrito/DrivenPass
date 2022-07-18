import { Request, Response } from "express";

import { Encrypt } from "../utils/EncryptsData.js";
import * as CardService from "../services/CardService.js";
import { createCard } from "../repositories/CardRepository.js";
// {
//   "title": "santander",
//   "titleCard": "natan",
//   "numberCard":"3456-7654-7895-7795-65",
//   "cardHolderName":"tanzin malado",
//   "cvv":"756",
//   "password":"1595",
//   "expirateDate": "11-28",
//   "isVirtual":false,
//   "type":"debit"
// }
export async function createCard(req: Request, res: Response) {
  // const userId = res.locals.userData.id;
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
