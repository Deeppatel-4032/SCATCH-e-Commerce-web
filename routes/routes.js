const express = require("express");
const router = express.Router();
const ownerRoute = require("./owener_route.js");
const productRoute = require("./product_route.js");
const userRoute = require("./user_route.js")

router.use("/owner", ownerRoute);
router.use("/products", productRoute);
router.use("/users", userRoute)

module.exports = router;