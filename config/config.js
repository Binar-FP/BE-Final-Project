const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT, } = process.env
const pg = require("pg")

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false, }
}

const sharedConfig = {
  client: "pg",
}

pg.defaults.ssl = true;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
}
