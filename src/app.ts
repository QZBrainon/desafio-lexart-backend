import { Request, Response } from "express";

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const port = process.env.API_PORT || 3001;
const authRouter = require("./routes/auth.ts");
// const userRouter = require('../routes/userRouter');
// const productRouter = require('../routes/productRouter');
// const saleRouter = require('../routes/saleRouter');
// const { erro } = require('../middlewares/ErrorMid');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

app.get("/coffee", (_req: Request, res: Response) => res.status(418).end());

app.listen(port);

console.log(`[SERVER]: Listening on port ${port}`);

module.exports = app;
