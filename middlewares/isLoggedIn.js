const jwt = require("jsonwebtoken");
const userModel = require("../models/user_model");

const isLoggedIn = async (req, res, next) => {
    if(!req.cookies.token) {
        req.flash("error", "You Need To Login First");
        res.redirect("/");

    } else {
       try {
            const decode = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
            console.log("decode >>", decode);
            const user = userModel.findOne({ email : decode.email }).select("-password");
            req.user = user;
            next();

        } catch (error) {
            console.log("JWT Error", error);
            req.flash("error", "Somting Went Wrong...!");
            res.redirect("/");
       }
    }
}

module.exports = isLoggedIn;