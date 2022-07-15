import { Router } from "express";
import handleErrorMiddleware from "../middlewares/handlerErrorMiddleware.js";

import authRouter from "./authRoute.js";
// import handleErrorMiddleware from "../middlewares/handlerErrorMiddleware.js";

const router = Router();
router.use(authRouter);
router.use(handleErrorMiddleware);
// router.use(handleErrorMiddleware);
export default router;
