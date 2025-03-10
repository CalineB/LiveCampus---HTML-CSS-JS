const { Sequelize } = require('sequelize');

// Créez une connexion à la base de données
const pool = new Sequelize({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PGPORT,
  dialect: 'postgres',
  define: {
    createdAt: false,
    updatedAt: false,
  },
  logging: false,
});


module.exports = pool;