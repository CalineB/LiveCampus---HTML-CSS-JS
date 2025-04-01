const { Sequelize } = require('sequelize');

const UIUX_DB = new Sequelize({
  user: process.env.UIUX_USER,
  host: process.env.UIUX_HOST,
  database: process.env.UIUX_DATABASE,
  password: process.env.UIUX_PASSWORD,
  port: process.env.UIUX_PGPORT,
  dialect: 'postgres',
  define: {
    createdAt: false,
    updatedAt: false,
  },
  logging: false,
});

module.exports = UIUX_DB;