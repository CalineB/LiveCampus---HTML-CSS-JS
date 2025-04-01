const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Role', {
    role_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true 
    },
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
    timestamps: false,
  });
};
