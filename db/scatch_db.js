const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose.connect(process.env.MONGODB_URL).then((res)=> {
    console.log("database is connected ...!");
}).catch((err) => {
    console.log("database is not connected ...!", err);
})

module.exports = db;