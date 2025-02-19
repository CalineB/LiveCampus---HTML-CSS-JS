const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('OrderProduct', {
    orders_products: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    unit_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    subtotal_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
  }, {
    sequelize,
    modelName: 'OrderProduct',
    tableName: 'orders_products',
    timestamps: false,
  });
};
