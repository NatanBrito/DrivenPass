import * as NetworkRepository from "../repositories/NetworkRepository.js";
import { DecryptPass } from "../utils/EncryptsData.js";

export async function createNetwork(data: NetworkRepository.createNetwork) {
  const verify = await NetworkRepository.CreateNetwork(data);
  return verify;
}
export async function findByIdNetwork(id: number, userId: number) {
  const find = await NetworkRepository.findByIdInNetwork(id, userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "unauthorized Cards",
    };
  }
  return { ...find, password: DecryptPass(find.passwordNetwork) };
}

export async function findAllNetwork(id: number) {
  const allNetwork = await NetworkRepository.findAllInNetwork(id);
  const getWithPass = allNetwork.map((Network) => {
    delete Network.userId;
    return {
      ...Network,
      password: DecryptPass(Network.passwordNetwork),
    };
  });
  return getWithPass;
}

export async function deleteByIdNetwork(id: number, userId: number) {
  const find = await NetworkRepository.findByIdInNetwork(id, userId);
  if (!find) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "unauthorized Cards",
    };
  }
  return await NetworkRepository.deleteByIdNetwork(id, userId);
}
