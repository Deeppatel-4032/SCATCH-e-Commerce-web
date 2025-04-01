const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    userName : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    contact : { type : Number, required : true },
    avatarImg : String,
    orders : [],
    cart : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "products"
        }
    ]
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;