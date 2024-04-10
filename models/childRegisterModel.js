const mongoose = require("mongoose");

const childRegisterSchema = new mongoose.Schema({
    name:{
        type: String, 
        trim: true
    },
    dob:{
        type: Date,
        trim: true
    },
    age:{
        type: Number, 
        trim: true
    },
    gender:{
        type: String, 
        trim: true
    },
    parentNames:{
        type: String, 
        trim: true
    },
    contact:{
        type: String, 
        unique: true
    },
    address:{
        type: String, 
        trim: true
    },
    periodOfStay:{
        type: String, 
        trim: true
    },
    childNumber:{
        type: String, 
        unique: true
    },
    image:{
        type: String, 
    }  

});

module.exports = mongoose.model("childRegisterModel", childRegisterSchema)