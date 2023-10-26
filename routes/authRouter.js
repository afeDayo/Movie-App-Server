//import express
const express = require("express");

//import the functions from controllers
const { register, login, getUser } = require("../controllers/authController");
const methodNotAllowed = require("../utils/methodNotAllowed");

// importing auth from middleware
const auth = require("../middlewares/auth");

//spins up a new express router
const router = express.Router();

// use the imported functions in the router paths and bringing in the methodNotAllowed
router.route("/register").post(register).all(methodNotAllowed);
router.route("/login").post(login).all(methodNotAllowed);
router.route("/user").post(auth, getUser).all(methodNotAllowed);

//export router
module.exports = router;
