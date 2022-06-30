var mongoose=require('mongoose')
var schema=mongoose.Schema
var Commentaire= require('./commentaire')
const {Schema} = require("mongoose");


var blogue=new schema({
    title:String,
    date_publication:String,
    nom:String,
    message:String,
    photo:[{
        title:String,
        url:String
    }],
    commentaires:[{ type: Schema.Types.ObjectId, ref: 'Commentaire' }]

})

var Blogue=mongoose.model('blogue',blogue)
module.exports=Blogue
