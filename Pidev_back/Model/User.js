var mongoose = require("mongoose");
var schema = mongoose.Schema;
var User = new schema({
    email: { type: String, require: true , unique: true},
    username: { type: String, require: true},
    hash: { type: String, required: true },
    adresse: { type: String},
    phone: { type: Number},
    cin: { type: Number , require: true ,  unique: true},
    status: { type: Boolean, require: true}

})
module.exports= mongoose.model('user', User);