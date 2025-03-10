const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('ProductAvailability', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'product_id',
      },
      onDelete: 'CASCADE',
    },
    day_of_week: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isIn: [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']],
      },
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    }, 
  }, {
    sequelize,
    modelName: 'Product_Availability',
    tableName: 'products_availability',
    timestamps: false,
  });
};
