const express = require('express');
const UserController = require('../controllers/userController');
const userExists = require('../middlewares/userExists');
const router = express.Router();

router.get('/', UserController.index)

router.post('/', UserController.store)

router.route('/:id')
.get(UserController.show)
.put(UserController.update)
.delete(UserController.destroy)

router.param('id', userExists.run)

module.exports = router
