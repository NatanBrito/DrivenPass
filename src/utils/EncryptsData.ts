import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.ENCRYPTPASS);
export function EncryptPassword(password: string) {
  const encrypt = cryptr.encrypt(password);
  return encrypt;
}
export function DecryptPassword(password: string) {
  const decrypted = cryptr.decrypt(password);
  return decrypted;
}
