const express = require("express");
const user_router = express.Router();
const userCon = require("../controllers/user_controller.js");

user_router.get("/", userCon.getUserData);
user_router.post("/register", userCon.postRegisterUser);

user_router.get("/logInForm", userCon.getLogInData);
user_router.post("/logIn", userCon.postLogInUser);

user_router.get("/logOutUser", userCon.logOutUser)


module.exports = user_router;