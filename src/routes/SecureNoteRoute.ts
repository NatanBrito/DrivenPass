import { Router } from "express";

import * as SecureNoteController from "../controllers/SecureNoteController.js";
import schemaValidateMiddleware from "../middlewares/SchemaValidateMiddleware.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
import SecureNote from "../schemas/SecureNoteSchema.js";

const SecureNoteRouter = Router();

SecureNoteRouter.post(
  "/SecureNote",
  schemaValidateMiddleware(SecureNote),
  verifyToken,
  SecureNoteController.createSecureNote
);
SecureNoteRouter.get(
  "/SecureNote/:id",
  verifyToken,
  SecureNoteController.findSecureNote
);
SecureNoteRouter.delete(
  "/SecureNote/:id/delete",
  verifyToken,
  SecureNoteController.deleteSecureNote
);
export default SecureNoteRouter;
