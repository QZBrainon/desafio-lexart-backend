require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_CONFIG = { expiresIn: "7d", algorithm: "HS256" };
const secret = process.env.JWT_SECRET;

const generateToken = (id) => {
  const token = jwt.sign(
    {
      data: {
        id,
      },
    },
    secret,
    JWT_CONFIG
  );
  return token;
};

module.exports = generateToken;
