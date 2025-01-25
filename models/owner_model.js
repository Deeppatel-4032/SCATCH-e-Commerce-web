const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({

    ownerName : {
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
    products : {
        type : []
    },
    avatarOwner : {
        type : string
    },
    gstIn : String,

});

const ownerModel = mongoose.model("owners", ownerSchema);

module.exports = ownerModel;