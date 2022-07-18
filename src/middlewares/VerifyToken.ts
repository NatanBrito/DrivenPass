import { NextFunction, Request, Response } from "express";

import * as commomSerive from "../services/commomService.js";

interface tokenData {
  id: number;
  name: string;
  email: string;
}
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("invalidate session !!");
  const token = authorization.replace("Bearer", "").trim();
  const verifyAndData: tokenData = commomSerive.decryptToken(token);
  commomSerive.decryptToken(token);
  res.locals.userData = verifyAndData;
  next();
}
