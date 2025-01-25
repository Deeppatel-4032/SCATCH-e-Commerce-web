const express = require("express");
const owner_router = express.Router();

owner_router.get("/", (req, res) => {
    res.send("Done");
})

module.exports = owner_router;