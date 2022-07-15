import { Router } from "express";

import { SignIn, SignUp } from "../controllers/AuthController.js";
import schemaValidateMiddleware from "../middlewares/SchemaValidateMiddleware.js";
import * as schema from "../schemas/AuthSchema.js";

const authRouter = Router();

authRouter.post("/SignIn", schemaValidateMiddleware(schema.SignIn), SignIn);
authRouter.post("/SignUp", schemaValidateMiddleware(schema.SignUp), SignUp);
export default authRouter;
