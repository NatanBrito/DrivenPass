import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();
const cryptr = new Cryptr(process.env.ENCRYPTPASS);
export function Encrypt(password: string) {
  const encrypt = cryptr.encrypt(password);
  return encrypt;
}
export function Decrypt(password: string) {
  return cryptr.decrypt(password);
}
