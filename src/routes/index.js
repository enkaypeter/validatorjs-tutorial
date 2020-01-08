const express = require('express');
const router = express();
const baseController = require("../controllers/base-controller");
const validation = require('../middleware/validation-middleware');



router.get("/", baseController.index);
router.post("/signup", validation.signup, baseController.signup)

module.exports = router;
