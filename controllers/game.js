const router = require('express').Router()
const games = require('../models/games').games
const db = require('../models')

router.get('/:id', (req, res) => {
    db.Game.findById(req.params.id)
    .then(game => {
        res.render('game', game)
    })
    
})

module.exports = router
