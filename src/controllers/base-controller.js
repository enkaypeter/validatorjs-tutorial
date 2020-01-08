const express = require("express");
const router = express();
const config = require("../config");
// const User = require("../models");
// const bcrypt = require("bcryptjs");

router.set("loginSecret", config.secret);


let jwt    = require("jsonwebtoken");

module.exports = {
    index: (req, res) => {
        return res.status(200).json({
            success: true,
            message: ":)",
        })
    },

    signup: (req, res) => {
        
        return res.status(200).json({
            success: true,
            message: "signup successful"
        })
    }

}
