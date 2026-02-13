import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost', // Endereço
  user: 'root', // Usuário
  password: 'senai', // Senha
  database: 'startup', // Banco de dados
  port: 3307,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;