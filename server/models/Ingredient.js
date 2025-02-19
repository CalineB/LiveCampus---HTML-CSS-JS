const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Ingredient', {
    ingredient_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'ingredients',
    timestamps: false,
  });
};
