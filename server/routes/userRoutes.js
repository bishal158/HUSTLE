// common requirements
const express = require("express")
const router = express.Router()
const filesystem = require("fs");

// controllers imports
const {
  signup
} = require('../controllers/userController')


//  routes
router.post("/user/signup", signup);
//  routes exports
module.exports = router;