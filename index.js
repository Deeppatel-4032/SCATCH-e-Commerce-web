const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();
const db = require("./db/scatch_db.js");
const ownerRoute = require("./routes/owener_route.js");
const productRoute = require("./routes/product_route.js");
const userRoute = require("./routes/user_route.js")

const PORT = process.env.PORT || 3080;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    resave: false,
    saveUninitialized: false 
}));
app.use(flash());

app.set("view engine", "ejs");

app.use("/", ownerRoute);
app.use("/", productRoute);
app.use("/", userRoute);

app.listen(PORT, (err) => {
    if(!err) {
        console.log(`server is on the port http://localhost:${PORT}`);
    }
})
