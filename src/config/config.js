const dotenv = require("dotenv").config();

const config = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  ssl: true,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
