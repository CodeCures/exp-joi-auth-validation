const AuthController = {
    login(req, res){
        res.status(200).json(req.validated)
    },
    register(req, res){
        res.status(200).json(req.validated)
    }
}

module.exports = AuthController;