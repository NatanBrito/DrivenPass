import { Request, Response, Router } from "express";

const authRouter = Router();

authRouter.post("/", (req: Request, res: Response) => {
  res.status(200).send("funcionando");
});

export default authRouter;
