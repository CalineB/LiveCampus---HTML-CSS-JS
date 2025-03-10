const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    isGrayedOut: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products_categories',
        key: 'category_id',
      },
    },
  }, {
    tableName: 'products',
    timestamps: false,
  });

  // ✅ Définition des associations
  Product.associate = (models) => {
    // Association avec ProductAvailability (relation 1:N)
    Product.hasMany(models.ProductAvailability, { 
      foreignKey: 'product_id',
      as: 'product_availabilities' 
    });

    // Association avec products_categories (relation N:1)
    Product.belongsTo(models.products_categories, { 
      foreignKey: 'category_id', 
      as: 'category' 
    });
  };

  return Product;
};
