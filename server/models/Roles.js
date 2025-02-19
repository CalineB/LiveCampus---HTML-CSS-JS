const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Role', {
    role_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(25), allowNull: false, unique: true }
  }, { timestamps: false });
};
