// const fs = require('fs')
const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT, } = process.env
const pg = require("pg")

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false, }
}

const sharedConfig = {
  client: "pg",
}

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    // dialectOptions: {  // comment this line, if you use database in local
    //   ssl: { // comment this line, if you use database in local
    //     rejectUnauthorized: false, // comment this line, if you use database in local
    //     ca: fs.readFileSync('./config/ca-certificate.crt').toString(),  // comment this line, if you use database in local
    //   }
    // }
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
