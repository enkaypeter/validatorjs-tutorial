const express = require('express');
const router = express();
const baseController = require("../controllers/base-controller");
const validationMiddleware = require('../middleware/validation-middleware');



router.get("/", baseController.index);
router.post("/signup", validationMiddleware.signup, baseController.signup)

module.exports = router;
