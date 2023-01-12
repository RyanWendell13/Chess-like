class Piece {
    constructor(newInfo, newTile, newElement){
        this.info = newInfo,
        this.tile = newTile,
        this.moved = false,
        this.element = newElement
    }

    //called from CalculatePossibleMoves
    RunDownMove (i, tempMoves, newPos, enemyPieces, colorTiles) {
        let invalidMove = false
        for(let j = 0; j < this.info.moves[i].iterators.length; j++){
            newPos = new Vector2(newPos.x+this.info.moves[i].iterators[j].x*GetTeamModifier(this),newPos.y+this.info.moves[i].iterators[j].y*GetTeamModifier(this))
            invalidMove = CheckMove(i, invalidMove, tempMoves, this, enemyPieces, newPos, colorTiles)
        }
        return [newPos,invalidMove]
    }


    //finds and dispalys all possible moves for a piece
    CalculatePossibleMoves (enemyPieces, colorTiles) {
        let tempMoves = Array()
        for(let i = 0; i < this.info.moves.length; i++){
            let newPos = this.tile.pos
            if(this.info.moves[i].firstMove == false || this.moved == false){
                if(this.info.moves[i].isRepeating == true){
                    //repeating
                    let invalidMove = false
                    while( invalidMove == false){
                        let info = this.RunDownMove(i, tempMoves, newPos, enemyPieces, colorTiles)
                        newPos = info[0]
                        invalidMove = info[1]
                    }
                }
                else{
                    let info = this.RunDownMove(i, tempMoves, newPos, enemyPieces, colorTiles)
                    console.log(info)
                    console.log(tempMoves)
                    newPos = info[0]
                }
            }
        }
        return tempMoves
    }

    MovePiece (tile) {
        tile.element.appendChild(pieceSelected.element)
        DeletePossibleMoves()
    
        //run exclusive functions
        ExclusiveMoveChecks(this, tile)
    
        this.tile.piece = null
        this.tile = tile
        this.moved = true
        tile.piece = this
        pieceSelected = null
        this.element.style.zIndex = 10+tile.pos.y
    
        ChangeTurn()
    }

    DeletePiece(){
        this.element.parentNode.removeChild(this.element)
        this.tile.piece = null
        whitePieces = whitePieces.filter(p => p !== this )
        blackPieces = blackPieces.filter(p => p !== this )
        
    }
    
}

//creates and styles pieces
function CreatePiece (type, imageIndex, boardPos, element) {
    let newPiece = new Piece(type, boardPos, element)
    newPiece.element.src = newPiece.info.image[imageIndex]
    newPiece.element.alt= newPiece.info.name
    newPiece.element.id = 'Piece'
    newPiece.element.style.position = 'absolute'
    newPiece.element.style.bottom = type.yOffset +'px'
    newPiece.element.style.zIndex = 10+boardPos.pos.y
    newPiece.element.addEventListener('onClick',event => Clicked(event.target))
    boardPos.element.appendChild(newPiece.element)
    boardPos.piece = newPiece
    return newPiece
}









