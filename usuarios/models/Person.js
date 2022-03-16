const mongoose = require('mongoose')
const postes = require('./Posts')

const Person = mongoose.model('Person',{
    id:Number,
    name: String,
    userName: String,
    email:String,
    street:String,
    suite:String,
    city:String,
    zipcode:String,
    lat:Number,
    lng:Number,
    phone:String,
    website:String,
    nameCompany:String,
    catchPhrase:String,
    bs:String
})



module.exports = Person