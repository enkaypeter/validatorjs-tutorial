const { User } = require("../models");

module.exports = {
    index: (req, res) => {
        return res.status(200).json({
            success: true,
            message: ":)",
        })
    },

    signup: (req, res) => {

        const { email, gender, username, password, phone} = req.body;
        const newUserObj = { email, gender, username, password, phone};
        const newUser = new User(newUserObj);

        newUser.save((saveErr) => {
            if(saveErr) {
                return res.status(412).send({
                    success: false,
                    message: saveErr
                })
            }
            return res.status(200).json({
                success: true,
                message: "signup successful"
            });
        });
        
        
    }

}
