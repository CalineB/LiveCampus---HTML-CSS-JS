require('dotenv').config({ path: require('path').resolve(__dirname, './.env') });
console.log("🔍 Chargement des variables d'environnement...");
console.log("BRUNITOS_DATABASE:", process.env.BRUNITOS_DATABASE);
console.log("BRUNITOS_USER:", process.env.BRUNITOS_USER);
console.log("BRUNITOS_HOST:", process.env.BRUNITOS_HOST);

const { Sequelize } = require('sequelize');

// Créez la connexion aux bases de données
const BRUNITOS_DB = new Sequelize({
  username: process.env.BRUNITOS_USER,
  host: process.env.BRUNITOS_HOST,
  database: process.env.BRUNITOS_DATABASE,
  password: process.env.BRUNITOS_PASSWORD,
  port: process.env.BRUNITOS_PGPORT,
  dialect: 'postgres',
  define: {
    createdAt: false,
    updatedAt: false,
  },
  logging: false,
});

module.exports = BRUNITOS_DB;