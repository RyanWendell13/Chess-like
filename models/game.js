const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    name: {type: String},
    subtitle: {type: String},
    instructions: {type: [String]},

    pieces: [{name: {type: String},images:[{type: String}]}],

    tiles: [{name:{type: String},color:{type:String}}],

    issues: [{type: String}],

    script: {type: String}
})

module.exports = mongoose.model('Game', gameSchema)