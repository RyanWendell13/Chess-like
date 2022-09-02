const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name: {type: String}, 
    games: [{type: mongoose.Schema.Types.ObjectId, ref: 'Game'}], 
    description: {type: String}
})
module.exports = mongoose.model('Category', categorySchema)