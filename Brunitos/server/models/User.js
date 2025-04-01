const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    role_id: { type: DataTypes.INTEGER, allowNull: false },
    user_email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    user_firstname: { type: DataTypes.STRING(50), allowNull: false },
    user_lastname: { type: DataTypes.STRING(50), allowNull: false },
    user_pseudo: { type: DataTypes.STRING(50) },
    user_password: { type: DataTypes.STRING(250), allowNull: false },
    user_street: { type: DataTypes.STRING(50) },
    user_city: { type: DataTypes.STRING(50) },
    user_zipcode: { type: DataTypes.STRING(15) },
    user_address_extra: { type: DataTypes.STRING(50) },
    user_phone: { type: DataTypes.STRING(15) },
    user_miams: { type: DataTypes.INTEGER },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, { 
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false });
};
