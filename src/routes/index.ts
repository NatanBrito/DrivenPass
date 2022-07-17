import { Router } from "express";

import authRouter from "./authRoute.js";
import credentialRouter from "./credentialsRouter.js";
import handleErrorMiddleware from "../middlewares/handlerErrorMiddleware.js";

const router = Router();
router.use(authRouter);
router.use(credentialRouter);
router.use(handleErrorMiddleware);
export default router;
