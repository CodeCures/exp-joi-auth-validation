const User = require("../models/user")

module.exports.run = (req, res, next, id) => {
        let user = User.findOne(id)
        if (user) {
            req.user = user
            next()
        } else {
            res.sendStatus(404).json({message : "User Not Found"})
        }
    }
