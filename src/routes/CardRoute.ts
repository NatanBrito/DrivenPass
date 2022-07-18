import { Router } from "express";

import * as CardController from "../controllers/CardController.js";
import schemaValidateMiddleware from "../middlewares/SchemaValidateMiddleware.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { Card } from "../schemas/CardSchema.js";

const CardRouter = Router();

CardRouter.post(
  "/Card",
  schemaValidateMiddleware(Card),
  verifyToken,
  CardController.createCard
);
CardRouter.get("/Card/:id", verifyToken);
CardRouter.delete("/Card/:id/delete", verifyToken);
export default CardRouter;
