const {
  DB_HOST = "localhost",
  DB_NAME = "flutter-training",
  DB_DIALECT = "postgres",
  DB_USERNAME = "postgres",
  DB_PASSWORD = "root",
} = process.env;

module.exports = {
  development: {
    username: "postgres",
    password: "root",
    database: "flutter-training",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
};

module.exports.DB_CONFIG = {
  DB_HOST,
  DB_NAME,
  DB_DIALECT,
  DB_USERNAME,
  DB_PASSWORD,
};
