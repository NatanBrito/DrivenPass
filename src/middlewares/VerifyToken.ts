import { NextFunction, Request, Response } from "express";

import * as commomSerive from "../services/commomService.js";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("invalidate session !!");
  const token = authorization.replace("Bearer", "").trim();
  const verifyAndData = commomSerive.decryptToken(token);
  res.locals.userData = verifyAndData;
  next();
}
