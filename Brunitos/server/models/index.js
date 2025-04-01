const sequelize = require('../../sequelize_brunitos');

const Role = require('./Roles')(sequelize);
const User = require('./User')(sequelize);
const Order = require('./Order')(sequelize);
const Category = require('./Category')(sequelize);
const Product = require('./Product')(sequelize);
const ProductAvailability = require('./Product_Availability')(sequelize);
const OrderProduct = require('./Order_Products')(sequelize);
const Deliverer = require('./Deliverer')(sequelize);
const DeliveryOrder = require('./Deliverer_Order')(sequelize);
const OrderHistory = require('./Order_History')(sequelize);
const Supplier = require('./Supplier')(sequelize);
const Ingredient = require('./Ingredient')(sequelize);
const SupplierIngredient = require('./Supplier_Ingredient')(sequelize);
const Recipe = require('./Recipe')(sequelize);
const RecipeIngredient = require('./Recipe_Ingredient')(sequelize);

// Définition des associations
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

Product.hasMany(ProductAvailability, { foreignKey: 'product_id', as: 'product_availabilities' });
ProductAvailability.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'order_id' });
Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'product_id' });

Role.hasMany(Deliverer, { foreignKey: 'role_id' });
Deliverer.belongsTo(Role, { foreignKey: 'role_id' });

Deliverer.hasMany(DeliveryOrder, { foreignKey: 'deliverer_id' });
DeliveryOrder.belongsTo(Deliverer, { foreignKey: 'deliverer_id' });

Order.hasOne(DeliveryOrder, { foreignKey: 'order_id' });
DeliveryOrder.belongsTo(Order, { foreignKey: 'order_id' });

Order.hasOne(OrderHistory, { foreignKey: 'order_id' });
OrderHistory.belongsTo(Order, { foreignKey: 'order_id' });

User.hasMany(OrderHistory, { foreignKey: 'user_id' });
OrderHistory.belongsTo(User, { foreignKey: 'user_id' });

Deliverer.hasMany(OrderHistory, { foreignKey: 'deliverer_id' });
OrderHistory.belongsTo(Deliverer, { foreignKey: 'deliverer_id' });

Supplier.hasMany(SupplierIngredient, { foreignKey: 'supplier_id' });
SupplierIngredient.belongsTo(Supplier, { foreignKey: 'supplier_id' });

Ingredient.hasMany(SupplierIngredient, { foreignKey: 'ingredient_id' });
SupplierIngredient.belongsTo(Ingredient, { foreignKey: 'ingredient_id' });

Recipe.hasMany(RecipeIngredient, { foreignKey: 'recipe_id' });
RecipeIngredient.belongsTo(Recipe, { foreignKey: 'recipe_id' });

Ingredient.hasMany(RecipeIngredient, { foreignKey: 'ingredient_id' });
RecipeIngredient.belongsTo(Ingredient, { foreignKey: 'ingredient_id' });

Recipe.hasOne(Product, { foreignKey: 'recipe_id' });
Product.belongsTo(Recipe, { foreignKey: 'recipe_id' });

console.log(`Tentative de connexion à la base de données : ${process.env.BRUNITOS_DATABASE}`);
console.log(`Utilisateur : ${process.env.BRUNITOS_USER}`);
console.log(`Hôte : ${process.env.BRUNITOS_HOST}`);

// Synchronisation avec la base de données
sequelize.sync()
  .then(() => {
    console.log(`Base de données synchronisée : ${sequelize.config.database}`);
  })
  .catch((err) => {
    console.error('Erreur de synchronisation:', err);
  });

module.exports = {
  sequelize,
  Role,
  User,
  Order,
  Category,
  Product,
  ProductAvailability,
  OrderProduct,
  Deliverer,
  DeliveryOrder,
  OrderHistory,
  Supplier,
  Ingredient,
  SupplierIngredient,
  Recipe,
  RecipeIngredient
};