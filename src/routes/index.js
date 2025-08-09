const express = require('express');

const UserController = require('../controllers/user-controller');
const ProductController = require('../controllers/product-controller');
const authenticate = require('../middlewares/authenticate');
const { validateUserAuth, validateProductData, validateQuantity } = require('../middlewares/request-validator')
const router  = express.Router();

router.post(
    '/register',
    validateUserAuth,
    UserController.create
);

router.post(
    '/login',
    validateUserAuth,
    UserController.signIn
);

router.post(
    '/products',
    authenticate,
    validateProductData,
    ProductController.create
);

router.put(
    '/products/:id/quantity',
    authenticate,
    validateQuantity,
    ProductController.updateQuantity
);

router.get('/products', authenticate, ProductController.getProducts);

module.exports = router;
