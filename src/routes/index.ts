import { Router } from "express";

import authRouter from "./authRoute.js";
// import handleErrorMiddleware from "../middlewares/handlerErrorMiddleware.js";

const router = Router();
router.use(authRouter);

// router.use(handleErrorMiddleware);
export default router;
