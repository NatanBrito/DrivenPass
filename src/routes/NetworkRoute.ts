import { Router } from "express";

import * as NetworkController from "../controllers/NetworkController.js";
import schemaValidateMiddleware from "../middlewares/SchemaValidateMiddleware.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { Network } from "../schemas/NetworkSchema.js";

const NetworkRouter = Router();

NetworkRouter.post(
  "/Network",
  schemaValidateMiddleware(Network),
  verifyToken,
  NetworkController.createNetwork
);
NetworkRouter.get("/Network/:id", verifyToken, NetworkController.findNetwork);
NetworkRouter.delete(
  "/Network/:id/delete",
  verifyToken,
  NetworkController.deleteNetwork
);
export default NetworkRouter;
