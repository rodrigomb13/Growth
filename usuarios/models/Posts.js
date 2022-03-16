const mongoose = require('mongoose')

const Posts = mongoose.model('Posts',{
    userId:Number,
    id:Number,
    title:String,
    body:String

})

module.exports = Posts