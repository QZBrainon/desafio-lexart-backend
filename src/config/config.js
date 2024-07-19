const config = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  dialect: process.env.SEQUELIZE_DIALECT,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
