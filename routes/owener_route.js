const express = require("express");
const owner_router = express.Router();
const ownerCon = require("../controllers/owners_Controller.js")

owner_router.get("/ownerCreateForm", ownerCon.getOwnerData);
owner_router.post("/ownerCreate", ownerCon.postOwnerData);

owner_router.get("/adminLogInForm", ownerCon.getAdminData);
owner_router.post("/adminLogin", ownerCon.postAdminData)


module.exports = owner_router;