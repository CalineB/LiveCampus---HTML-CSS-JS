const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Deliverer', {
    deliverer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'role_id',
      },
      onDelete: 'CASCADE',
    },
    firstname: DataTypes.STRING(50),
    lastname: DataTypes.STRING(50),
    phone_number: DataTypes.STRING(15),
    email: DataTypes.STRING(100),
    presence: {
      type: DataTypes.ENUM('available', 'on delivery', 'unavailable'),
    },
    vehicle_type: DataTypes.STRING,
    vehicle_plate: DataTypes.STRING,
    assigned_orders: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Deliverer',
    tableName: 'deliverers',
    timestamps: false,
  });
};
