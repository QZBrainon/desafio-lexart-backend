import { Request, Response } from "express";

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const port = process.env.API_PORT || 3001;
const authRouter = require("../src/routes/auth");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

app.get("/", (_req: Request, res: Response) =>
  res.status(200).send("Hello World")
);

app.get("/coffee", (_req: Request, res: Response) => res.status(418).end());

app.listen(port);

console.log(`[SERVER]: Listening on port ${port}`);

module.exports = app;
