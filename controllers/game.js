const router = require('express').Router()
const games = require('../models/games').games
const db = require('../models')

router.get('/:name', (req, res) => {
    db.Game.findOne({name: req.params.name})
    .then(game => {
        res.render('game', game)
    })
    
})

module.exports = router
