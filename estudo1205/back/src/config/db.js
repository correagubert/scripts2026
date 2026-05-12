import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '12219285',
    database: process.env.DB_NAME || 'estudo',
})

export default db;