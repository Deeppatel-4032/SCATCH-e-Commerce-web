const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({

    ownerName : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    contact : { type : Number, required : true },
    gstIn : String,
    avatarOwner : { type : String }, 
    products : [],

});

const ownerModel = mongoose.model("owners", ownerSchema);

module.exports = ownerModel;