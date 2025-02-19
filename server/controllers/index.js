const homeController = require('./homeController'); // about, home, profile, , ...
const userController = require('./userController');
const productController = require('./productController');
const basketController = require('./basketController');
const orderController = require('./orderController');
const authController = require('./authController'); // authentification, sign in, users password
const adminController = require('./adminController');




module.exports = {
    adminController,
    homeController,
    userController,
    productController,
    basketController,
    orderController,
    authController,
};