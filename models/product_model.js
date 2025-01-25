const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName : String,
    productImg : String,
    price : Number,
    discount : {
        type : Number,
        default : 0
    },
    bgColor : String,
    panelColor : String,
    textColer : String
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;