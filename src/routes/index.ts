import { Router } from "express";

import authRouter from "./authRoute.js";
import credentialRouter from "./credentialsRouter.js";
import handleErrorMiddleware from "../middlewares/handlerErrorMiddleware.js";
import SecureNoteRouter from "./SecureNoteRoute.js";
import CardRouter from "./CardRoute.js";
import NetworkRouter from "./NetworkRoute.js";

const router = Router();
router.use(authRouter);
router.use(credentialRouter);
router.use(SecureNoteRouter);
router.use(CardRouter);
router.use(NetworkRouter);
router.use(handleErrorMiddleware);
export default router;
