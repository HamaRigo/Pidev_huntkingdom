var mongoose = require("mongoose");
var schema = mongoose.Schema;
var Role = new schema({
    nom: { type: String , require: true},
    etat: { type: Boolean, require: true},

})
module.exports= mongoose.model('role', Role);