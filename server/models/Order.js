const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Order', {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'delivered', 'cancelled', 'in progress'),
    },
    order_miams: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    payment: {
      type: DataTypes.ENUM('cb', 'crypto', 'bank transfer'),
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false,
  });
};
