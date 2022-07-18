import { cards } from "@prisma/client";

import * as cardRepository from "../repositories/CardRepository.js";
import { DecryptPass } from "../utils/EncryptsData.js";

export async function createCard(data: cardRepository.createCard) {
  const verify = await cardRepository.CreateCard(data);
  return verify;
}
export async function findByIdCards(id: number, userId: number) {
  const find = await cardRepository.findByIdInCard(id, userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "unauthorized Cards",
    };
  }
  return { ...find, password: DecryptPass(find.password) };
}

export async function findAllCards(id: number) {
  const allCards = await cardRepository.findAllInCard(id);
  const getWithPass = allCards.map((Cards) => {
    delete Cards.userId;
    return {
      ...Cards,
      password: DecryptPass(Cards.password),
      cvv: DecryptPass(Cards.cvv),
    };
  });
  return getWithPass;
}

export async function deleteByIdCards(id: number, userId: number) {
  const find = await cardRepository.findByIdInCard(id, userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "unauthorized Cards",
    };
  }
  return await cardRepository.deleteByIdCard(id, userId);
}
