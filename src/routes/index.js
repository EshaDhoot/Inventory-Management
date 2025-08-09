const express = require('express');

const UserController = require('../controllers/user-controller');
const { validateUserAuth} = require('../middlewares/auth-request-validator')
const router  = express.Router();

router.post(
    '/register',
    validateUserAuth,
    UserController.create
);

module.exports = router;
