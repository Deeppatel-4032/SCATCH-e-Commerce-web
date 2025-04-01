const userModel = require("../models/user_model.js");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken.js")


exports.getUserData = async (req, res) => {
    const error = req.flash("error")
    res.render("register", { loggedIn : false, error });
}

exports.postRegisterUser = async (req, res) => {

    try {
        const { userName, email, password, contact } = req.body;

        const cheakUser = await userModel.findOne({email});
        if(cheakUser) return res.redirect("/logInForm");

        bcrypt.hash(password, 10, async (err, hashpass) => {

            const creatUser = await userModel.create({
                userName,
                email,
                password : hashpass,
                contact
            });
            await creatUser.save();
            res.redirect("/logInForm")
        })

    } catch (error) {
        console.log(error.message);
        res.redirect("/")
    }
}

exports.getLogInData = (req, res) => {
    const error = req.flash("error")
    res.render("login", { loggedIn : false, error })
}

exports.postLogInUser = async (req, res) => {

    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user) return res.redirect("/");

    bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
            const token = generateToken(user);
            res.cookie("token", token);

            res.redirect("/products/shop");
        } else {
            console.log("Email and password incorrect");
            res.redirect("/logInForm");
        }
    })

}


exports.logOutUser = (req, res) => {
    res.clearCookie("token", "");
    res.redirect("/logInForm")
    
}