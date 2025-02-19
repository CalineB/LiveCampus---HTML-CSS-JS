const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('RecipeIngredient', {
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipes',
        key: 'recipe_id',
      },
      onDelete: 'CASCADE',
      primaryKey: true,
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ingredients',
        key: 'ingredient_id',
      },
      onDelete: 'CASCADE',
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'RecipeIngredient',
    tableName: 'recipe_ingredients',
    timestamps: false,
  });
};
