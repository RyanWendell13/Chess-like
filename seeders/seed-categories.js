const db = require('../models')


db.Category.create([{
    name: 'none', 
    description: ``
},{
    name: 'Tafl', 
    description: `A series of Nordic and Celtic board games. Tafl is Old Norse for table and is used to label these games.`
}]).then(() => {
    console.log('Success')
    process.exit()
}).catch(err => {
    console.log(err)
    process.exit()
})
