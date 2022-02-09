const Joi = require("joi");
const Validators = require("../validators");

module.exports = (validator)  => {
    if(!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`)

    return async function (req, res, next) {
        console.log(req.body)
        try {
            const validated = await Validators[validator].validateAsync(req.body)
            req.validated = validated
            next()
        } catch (error) {
            if (error.isJoi) {
                res.status(422).json(error.message)
            }
        }
    }
}