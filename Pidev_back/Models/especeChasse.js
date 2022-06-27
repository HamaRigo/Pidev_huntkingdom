var mongoose=require('mongoose')
const {Schema} = require("mongoose");
var schema=mongoose.Schema

var especeChasse=new schema({
    nom:String,
    description:String,
    photo:String,
})

var EspeceChasse=mongoose.model('especeChasse',especeChasse)
module.exports=EspeceChasse
