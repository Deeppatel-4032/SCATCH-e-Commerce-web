const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    contact : Number,
    isAdmin : {
        type : Boolean,
    },
    avatarImg : String,
    orders : [],
    cart : []

})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;