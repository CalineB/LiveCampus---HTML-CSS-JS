const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('ProductAvailability', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    modelName: 'ProductAvailability',
    tableName: 'products_availability',
    timestamps: false,
  });
};
