const express = require('express');
const Validator = require('../middlewares/Validator')
const AuthController = require('../controllers/authController');
const router = express.Router();

router.post('/', Validator('login'), AuthController.login)
router.post('/login', Validator('login'), AuthController.login)
router.post('/register', Validator('register'), AuthController.register)

module.exports = router;