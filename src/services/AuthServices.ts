import * as repository from "../repositories/authRepository.js";
import { createUser } from "../repositories/authRepository.js";
export async function verifyValidEmail(email: string) {
  const verify = await repository.findEmailByEmail(email);
  if (verify) {
    throw {
      type: "unauthorized",
      status: 401,
      message: "E-mail has already register",
    };
  }
  return true;
}

export async function CreateUser(data: createUser) {
  await repository.Create(data);
  return true;
}
