const express = require('express');

const UserController = require('../controllers/user-controller');
const ProductController = require('../controllers/product-controller');
const authenticate = require('../middlewares/authenticate');
const { validateUserAuth, validateProductData } = require('../middlewares/request-validator')
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


module.exports = router;
