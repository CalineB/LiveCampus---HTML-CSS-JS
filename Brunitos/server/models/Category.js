const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('ProductCategory', {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ProductCategory',
    tableName: 'products_categories',
    timestamps: false,
  });
};
