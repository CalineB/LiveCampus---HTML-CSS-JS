const express = require('express');
const router = express.Router();
const { renderProducts } = require('../controllers/productController');

router.get("/products", renderProducts);


module.exports = router;
