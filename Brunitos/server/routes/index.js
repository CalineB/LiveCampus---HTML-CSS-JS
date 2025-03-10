// routes/index.js
const express = require('express');
const router = express.Router();
const {
    adminController,
    homeController,
    userController,
    productController,
    basketController,
    orderController,
    authController
} = require('../controllers');

// Définition des routes
router.get('/', homeController.renderHome);
router.get('/informations', homeController.renderAbout);
router.get('/admin', adminController.renderAdmin);
router.get('/users', userController.renderUsers);
router.get('/connexion', authController.renderAuth);
router.get('/panier', basketController.renderBasket);
router.get('/commandes', orderController.renderOrders);
router.get('/produits', productController.renderProducts);
router.get('/profil', homeController.renderProfile);
router.get('/inscription', authController.renderRegister);
router.get('/motdepasse', authController.renderResetPSW);

module.exports = router;
