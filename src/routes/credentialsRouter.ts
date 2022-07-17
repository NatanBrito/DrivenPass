import { Router } from "express";
import { createCredentials } from "../controllers/CredentialsController.js";
import schemaValidateMiddleware from "../middlewares/SchemaValidateMiddleware.js";
import { Credentials } from "../schemas/CredentialsSchemas.js";

const credentialRouter = Router();

credentialRouter.post(
  "/credentials",
  schemaValidateMiddleware(Credentials),
  createCredentials
);
export default credentialRouter;
