const { default: userExists } = require('../middlewares/userExists');
const User = require('../models/user');

const UserController = {
    index(req, res){
        res.status(200).json(User.all())
    },
    show(req, res){
        res.status(200).json(req.user)
    },
    store(req, res){
        res.json(User.create(req.body))
    },
    update(req, res) {
        res.json(User.update(req.user, req.body))
    },
    destroy(req, res) {
        res.json(User.delete(req.user.id))
    }
}

module.exports = UserController