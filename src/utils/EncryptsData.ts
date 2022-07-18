import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();
const cryptr = new Cryptr(process.env.ENCRYPTPASS);
export function EncryptPassword(password: string) {
  const encrypt = cryptr.encrypt(password);
  return encrypt;
}
export function DecryptPassword(password: string) {
  return cryptr.decrypt(password);
}
