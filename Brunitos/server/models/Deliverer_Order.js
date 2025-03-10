const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('DeliveryOrder', {
    delivery_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'orders',
        key: 'order_id',
      },
      onDelete: 'CASCADE',
    },
    deliverer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'deliverers',
        key: 'deliverer_id',
      },
      onDelete: 'CASCADE',
    },
    state: {
      type: DataTypes.ENUM('pending', 'on_route', 'delivered', 'failed'),
    },
    delivery_date: DataTypes.DATE,
    delivered_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'DeliveryOrder',
    tableName: 'delivery_orders',
    timestamps: false,
  });
};
