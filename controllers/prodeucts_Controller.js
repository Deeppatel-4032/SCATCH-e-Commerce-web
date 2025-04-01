const productModel = require("../models/product_model.js");
const userModel = require("../models/user_model.js");



exports.getProductDiteils = async (req, res) => {
    const success = req.flash("success")
    
    res.render("createProducts", { success });
}

exports.postCreateProduct = async (req, res) => {

    try {
        const { productName, price, discount, bgColor, panelColor, textColer } = req.body;
        
        const createProdects = await productModel.create({
            productImg : req.file.filename,
            productName,
            price,
            discount,
            bgColor,
            panelColor,
            textColer
        });

        await createProdects.save();

        res.redirect("/products/shop");

    } catch (error) {
        console.log("products creat error", error);
    }

}

exports.getShopData = async (req, res) => {
    const success = req.flash("success")
    const getProduct = await productModel.find({})
    res.render("shop", { products : getProduct, success });
}

exports.getAddToCards = async (req, res) => {            
    const user = await userModel.findOne(req.user._id);
    console.log("findUser", user);
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success", "Added To Cart");
    res.redirect("/products/shop");
}


exports.getCrtsProducts = async (req, res) => {
    const user = await userModel.findOne({ email : req.user.email }).populate("cart");

    res.render("cart", { useraProducts : user });
}

