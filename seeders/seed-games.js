const db = require('../models')

async function seed(){
    let none = await db.Category.findOne({name: 'none'})
    let tafl = await db.Category.findOne({name: 'Tafl'})

    let chess = await db.Game.create({
        name: 'Chess',
        subtitle: 'The Classic',

        instructions: [
            `Above and below the board are two boxes saying "Player One" and "Player Two". These show whose turn it is. When a box has a black border around it that means it's that players turn.`,
            `Simply click on a piece to move. It will highlight all possible moves the piece can make. Click on one of the highlighted tiles to move to it.`,
            `When a king is in check a blue line from the checking piece to the king will be created.`],

        pieces: [{name:'Pawn',images:['/images/Pawn.png']},
            {name:'Rook',images:['/images/Rook.png']},
            {name:'Knight',images:['/images/Knight.png', '/images/KnightVariation.png']},
            {name:'Bishop',images:['/images/Bishop.png']},
            {name:'Queen',images:['/images/Queen.png']},
            {name:'King',images:['/images/King.png']}],

        tiles: [{name:'Possible Move',color:'Yellow'},{name:'Possible Attack',color:'Red'},{name: 'Part Of The Check Path',color:'Blue'}],

        issues: [`The King can take a piece even if it is protected by another piece. For example a Queen puts the King in check with a Bishop able to move to the Queens tile. The King should be Checkmated, but instead the King can take the Queen.`,
            `The ability to Caste hasn't been added.`,
            `The ability to En Passant hasn't been added.`],

        script: '/js/special/Chess.js'
    })

    let latrunculi = await db.Game.create({
        name: 'Latrunculi',
        subtitle: 'Roman Chess',
        
        instructions: [
            `Above and below the board are two boxes saying "Player One" and "Player Two". These show whose turn it is. When a box has a black border around it that means it's that players turn.`,
            `Simply click on a piece to move. It will highlight all possible moves the piece can make. Click on one of the highlighted tiles to move to it.`,
            `Corners do not count as adjecent tiles.`,
            `To take a Pawn you must surround it with to other pawns, in a line. If a pawn is in the corner it can be taken by putting two pawns in the adjacent tiles. Outside of this the walls cannot be used to capture pawns. The Dux can be used to capture Pieces.`,
            `Capturing the Dux is one way to win the game. To capture the Dux it  must be surronded on all four adjacent tiles.`],

        pieces: [{name:'Pawn',images:['/images/Pawn.png']},
            {name:'Dux',images:['/images/Dux.png', '/images/DuxVariation.png']}],

        tiles: [{name:'Possible Move',color:'Yellow'}],

        issues: [],

        script: '/js/special/Latrunculi.js'
    })

    let tablut = await db.Game.create({
        name: 'Tablut',
        subtitle: 'Chess When Your Far From The Equator, Best Documented Tafl Game',
        
        instructions: [`All pieces move like Rooks. They can move horizontally and vertically as long as they are unobstructed.`,
        `Player one plays as the attackers, and goes first. Their goal is to capture the King. Who starts in the center of the board. In the castle`,
        `Player two plays as the defenders. Their goal is to escape by reaching any tile on the edge of the board.`,
        `All pieces can be captured by placing to opposing pieces on each side of the piece forming a line. There are a few exceptions to this rule.`,
        `Exception one: If the Branán is in the castle he must be totally surrounded to be captured.`,
        `Exception two: If the Branán is outside, but adjacent to the castle he must be surrounded on three sides.`,
        `No pieces can enter the castle. If the King leaves the castle he cannot re-enter`],

        pieces: [{name:'Pawn',images:['/images/Pawn.png']},
            {name:'King',images:['/images/King.png']}],

        tiles: [{name:'Possible Move',color:'Yellow'},{name:'Castle',color:'Red'}],

        issues: [],

        script: '/js/special/Tablut.js'
    })

    let brandubh = await db.Game.create({
        name: 'Brandubh',
        subtitle: 'Chess But Irish, Also It Is Quicker Then Other Tafl Varients',
        
        instructions: [`All pieces move like Rooks. They can move horizontally and vertically as long as they are unobstructed.`,
            `Player one plays as the attackers, and goes first. Their goal is to capture the Branán. Who starts in the center of the board.`,
            `Player two plays as the defenders. Their goal is to escape by reaching any tile on the edge of the board.`,
            `All pieces can be captured by placing to opposing pieces on each side of the piece forming a line. There are a few exceptions to this rule.`,
            `Exception one: If the Branán is in the castle he must be totally surrounded to be captured.`,
            `Exception two: If the Branán is outside, but adjacent to the castle he must be surrounded on three sides.`,
            `No pieces can enter the castle. If the King leaves the castle he cannot re-enter`],

        pieces: [{name:'Pawn',images:['/images/Pawn.png']},
            {name:'Branán',images:['/images/Branán.png']}],

        tiles: [{name:'Possible Move',color:'Yellow'},{name:'Castle',color:'Red'}],

        issues: [],

        script: '/js/special/Brandubh.js'
    })
    let tawlbwrdd = await db.Game.create({
        index: 4,
        name: 'Tawlbwrdd',
        subtitle: 'Chess But With A Crazy Welsh Name And Too Many Pieces',
        
        instructions: [`All pieces move like Rooks. They can move horizontally and vertically as long as they are unobstructed.`,
            `Player one plays as the attackers, and goes first. Their goal is to capture the Branán. Who starts in the center of the board.`,
            `Player two plays as the defenders. Their goal is to escape by reaching any tile on the edge of the board.`,
            `All pieces can be captured by placing to opposing pieces on each side of the piece forming a line. There are a few exceptions to this rule.`,
            `Exception one: If the Branán is in the castle he must be totally surrounded to be captured.`,
            `Exception two: If the Branán is outside, but adjacent to the castle he must be surrounded on three sides.`,
            `No pieces can enter the castle. If the King leaves the castle he cannot re-enter`],

        pieces: [{name:'Pawn',images:['/images/Pawn.png']},
            {name:'King',images:['/images/King.png']}],

        tiles: [{name:'Possible Move',color:'Yellow'},{name:'Castle',color:'Red'}],

        issues: [],

        script: '/js/special/Tawlbwrdd.js'

    })
    let compoundChess = await db.Game.create({
        name: 'Compound Chess',
        subtitle: 'Chess But With Theft',

        instructions: [
            `Above and below the board are two boxes saying "Player One" and "Player Two". These show whose turn it is. When a box has a black border around it that means it's that players turn.`,
            `Simply click on a piece to move. It will highlight all possible moves the piece can make. Click on one of the highlighted tiles to move to it.`,
            `When a king is in check a blue line from the checking piece to the king will be created.`,
            `When a piece captures another piece it absorbs the move set of that piece.`],

        pieces: [{name:'Pawn',images:['/images/Pawn.png']},
            {name:'Rook',images:['/images/Rook.png']},
            {name:'Knight',images:['/images/Knight.png', '/images/KnightVariation.png']},
            {name:'Bishop',images:['/images/Bishop.png']},
            {name:'Queen',images:['/images/Queen.png']},
            {name:'King',images:['/images/King.png']}],

        tiles: [{name:'Possible Move',color:'Yellow'},{name:'Possible Attack',color:'Red'},{name: 'Part Of The Check Path',color:'Blue'}],

        issues: [`The King can take a piece even if it is protected by another piece. For example a Queen puts the King in check with a Bishop able to move to the Queens tile. The King should be Checkmated, but instead the King can take the Queen.`,
            `The ability to Castle hasn't been added.`,
            `The ability to En Passant hasn't been added.`],

        script: '/js/special/CompoundChess.js'
    })
    none.games.push(chess)
    none.games.push(latrunculi)
    tafl.games.push(tablut)
    tafl.games.push(brandubh)
    tafl.games.push(tawlbwrdd)
    none.games.push(compoundChess)
    await none.save()
    await tafl.save()
    process.exit()

}
seed()