const Validator = require('../helpers/validate');

const signup = async (req, res, next) => {
    const validationRule = {
        "email": "required|string|email|exist:User,email",
        "username": "required|string|exist:User,username",
        "phone": "required|string",
        "password": "required|string|min:6|confirmed|strict",
    }

    await Validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = {
    signup
};