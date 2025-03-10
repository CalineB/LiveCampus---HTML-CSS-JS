const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Recipe', {
    recipe_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1 },
    },
    steps: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    cooking_method: DataTypes.STRING(255),
    cooking_time: DataTypes.INTEGER,
    cooking_temperature: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    timestamps: false,
  });
};
