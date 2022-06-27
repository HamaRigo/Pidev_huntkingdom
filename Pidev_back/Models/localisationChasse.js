var mongoose=require('mongoose')
var schema=mongoose.Schema
var EspeceChasse=require('./especeChasse')
const {Schema} = require("mongoose");


var localisationChasse=new schema({
    longitude:String,
    latitude:String,
    nom:String,
    description:String,

})

var LocalisationChasse=mongoose.model('localisationChasse',localisationChasse)
module.exports=LocalisationChasse
