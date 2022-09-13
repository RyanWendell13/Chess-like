
require ('dotenv').config()
const express = require('express')
const db = require('./models')

const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('static'))
app.use(express.urlencoded({ extended: true }))
app.use('/games', require('./controllers/games'))

app.get('/', function (req, res){
    res.render('temphome')
})
app.get('/home', function (req, res){
    db.Category.find()
    .populate('games')
    .then((categories) => {
        res.render('home', {categories})
    }).catch(err => {
        console.log(err)
    })
})

app.listen(process.env.PORT)