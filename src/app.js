require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const port = process.env.API_PORT || 3001;
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/users", authRouter);

app.get("/", (_req, res) => res.status(200).send("Hello World"));

app.get("/coffee", (_req, res) => res.status(418).end());

app.use(errorHandler);

app.listen(port);

console.log(`[SERVER]: Listening on port ${port}`);

module.exports = app;
