const dotEnv = require('dotenv');
const postgres = require('pg');
const { Pool } = postgres;

dotEnv.config()

const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
}

const pool = new Pool(dbConfig)
module.exports = pool;