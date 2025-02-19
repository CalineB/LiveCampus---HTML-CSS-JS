const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('OrderHistory', {
    orders_history_id: {
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'user_id',
      },
    },
    deliverer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'deliverers',
        key: 'deliverer_id',
      },
    },
    total_price: DataTypes.DECIMAL(10, 2),
    final_state: {
      type: DataTypes.ENUM('delivered', 'failed'),
    },
    created_at: DataTypes.DATE,
    archived_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'OrderHistory',
    tableName: 'orders_history',
    timestamps: false,
  });
};
