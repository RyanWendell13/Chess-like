require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

module.exports.Category = require('./category')
module.exports.Game = require('./game')