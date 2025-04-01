const ownerModel = require("../models/owner_model.js");
const bcrypt = require("bcrypt")


exports.getOwnerData = async (req, res) => {

    const getFindOwner = await ownerModel.find({});

    console.log("getFindOwner >>", getFindOwner);

    const error = req.flash("error")
    
    res.render("ownerRegister", { error })
}

exports.postOwnerData = async (req, res) => {

    const OwnerData = await ownerModel.find({});

    if(OwnerData.length > 0) return res.status(500).send("you don't have permission to create new Owner");

    try {
        const { ownerName, email, password, contact } = req.body;

        bcrypt.hash(password, 10, async (err, hashPass) => {
            const createOwner = await ownerModel.create({
                ownerName,
                email,
                password : hashPass,
                contact
            })
            console.log("createOwner >>>", createOwner);
            await createOwner.save();

            res.redirect("/admin");
        })
    
    } catch (error) {
        console.log("error", error)
    }
    
}

exports.getAdminData = async (req, res) => {

    const getAdmin = await ownerModel.find({});

    console.log("getAdmin >>", getAdmin);
    
    res.render("ownerLogin");
}

exports.postAdminData = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const user = await ownerModel.findOne({email})
    
        bcrypt.compare(password, user.password, (err, result) => {
            if(result) {

                res.redirect("/creatProducet");            
            } else {
                redirect("/adminLogInForm")
            }
        })
    } catch (error) {
        console.log(error);
        
    }
}

