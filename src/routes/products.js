const express = require("express");

const productRouter = express.Router();

productRouter.post("/", (_req, res) => res.send("auth"));

module.exports = productRouter;
