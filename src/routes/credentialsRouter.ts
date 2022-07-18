import { Router } from "express";
import * as credentialController from "../controllers/CredentialsController.js";
import schemaValidateMiddleware from "../middlewares/SchemaValidateMiddleware.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { Credentials } from "../schemas/CredentialsSchemas.js";

const credentialRouter = Router();

credentialRouter.post(
  "/credential",
  schemaValidateMiddleware(Credentials),
  verifyToken,
  credentialController.createCredentials
);
credentialRouter.get(
  "/credential/:id",
  verifyToken,
  credentialController.findCredential
);
credentialRouter.delete(
  "/credential/:id/delete",
  verifyToken,
  credentialController.deleteCredential
);
export default credentialRouter;
