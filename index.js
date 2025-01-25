const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

const db = require("./db/scatch_db.js");
const router = require("./routes/routes.js");

require("dotenv").config();

const PORT = process.env.PORT || 3080;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/api/v1", router);

app.listen(PORT, (err) => {
    if(!err) {
        console.log(`server is on the port http://localhost:${PORT}/api/v1`);
    }
})
