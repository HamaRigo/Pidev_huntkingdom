var mongoose=require('mongoose')
const {Schema} = require("mongoose");
var schema=mongoose.Schema

var especeLocalisation=new schema({
    localisation:{ type: Schema.Types.ObjectId, ref: 'Localisation' },
    espece:{ type: Schema.Types.ObjectId, ref: 'EspeceChasse' },
})

var EspeceLocalisation=mongoose.model('especeLocalisation',especeLocalisation)
module.exports=EspeceLocalisation
