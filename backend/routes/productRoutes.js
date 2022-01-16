const express = require('express');
const router = express.Router();

const {getProducts, getProductById} = require('../controller/productControllers');

// GET  products from db
// GET /api/products
// Public Access
router.get('/', getProducts)

// GET one products from db
// GET /api/products/:id
// Public Access
router.get('/:id', getProductById)

module.exports = router;

