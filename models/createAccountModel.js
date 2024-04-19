const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const createAccountSchema = new mongoose.Schema({
    email:{
        type: String, 
        trim: true
    },
 ////deleted passsword ,only exists in db
});

createAccountSchema.plugin(passportLocalMongoose, {
usernameField: "email"
});

module.exports = mongoose.model("createAccountModel", createAccountSchema)