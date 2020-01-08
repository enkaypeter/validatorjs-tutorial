const Validator = require('../helpers/validate');

const login = (req, res, next) => {
    const validationRule = {
        username: 'required|string',
        password: 'required|string',
    };

    Validator(req.body, validationRule, {}, (err, status) => {
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
};

const signup = (req, res, next) => {
    const validationRule = {
        "email": "required|string|email",
        "username": "required|string|",
        "phone": "required|string",
        "password": "required|string|min:6|confirmed",
    }

    Validator(req.body, validationRule, {}, (err, status) => {
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
    login,
    signup,
};