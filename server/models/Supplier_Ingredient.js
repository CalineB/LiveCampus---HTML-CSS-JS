const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('SupplierIngredient', {
    supplier_ingredients_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'suppliers',
        key: 'supplier_id',
      },
      onDelete: 'CASCADE',
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ingredients',
        key: 'ingredient_id',
      },
      onDelete: 'CASCADE',
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'SupplierIngredient',
    tableName: 'supplier_ingredients',
    timestamps: false,
  });
};
