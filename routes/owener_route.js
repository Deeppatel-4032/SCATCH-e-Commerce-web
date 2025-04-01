const express = require("express");
const owner_router = express.Router();
const ownerCon = require("../controllers/owners_Controller.js")
const isLoggedIn = require("../middlewares/isLoggedIn.js");

owner_router.get("/ownerCreateForm", ownerCon.getOwnerData);
owner_router.post("/ownerCreate", isLoggedIn, ownerCon.postOwnerData);

owner_router.get("/adminLogInForm", ownerCon.getAdminData);
owner_router.post("/adminLogin", isLoggedIn, ownerCon.postAdminData);


module.exports = owner_router;