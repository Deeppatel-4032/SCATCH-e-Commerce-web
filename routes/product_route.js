const express = require("express");
const product_router = express.Router();

product_router.get("/", (req, res) => {
    res.send("product");
})

module.exports = product_router;