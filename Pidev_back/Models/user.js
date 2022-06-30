var mongoose = require("mongoose");
var schema = mongoose.Schema;
var user = new schema({
    email: { type: String, require: true , unique: true},
    username: { type: String, require: true},
    hash: { type: String, required: true },
    phone: { type: Number},
    status: { type: Boolean, require: true}

})
user.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
module.exports= mongoose.model('users', user);