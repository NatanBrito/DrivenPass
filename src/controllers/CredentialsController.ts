import { Request, Response } from "express";

import * as commomSerive from "../services/commomService.js";

export function createCredentials(req: Request, res: Response) {
  res.status(200).send("x");
}
