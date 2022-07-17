import { Request, Response } from "express";

import * as commomService from "../services/commomService.js";
export async function createCredentials(req: Request, res: Response) {
  const { url, password, title, name } = req.body;
  const create = res.status(200).send(verify);
}
