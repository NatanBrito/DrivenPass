import express, { json } from "express";
import "express-async-errors";

import router from "./routes/index.js";
// import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// app.use(cors());
app.use(json());
app.use(router);
app.listen(+process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000} 🐱‍👤`);
});
