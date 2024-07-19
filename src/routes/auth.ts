import { Request, Response } from "express";

const express = require("express");

const authRouter = express.Router();

authRouter.post("/", (_req: Request, res: Response) => res.send("auth"));

module.exports = authRouter;
