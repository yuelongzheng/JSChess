const { GameBoard } = require("./board");

const { PV_ENTRIES, NO_MOVE, BOOL } = require("./defs");

const { MakeMove, UndoMove } = require("./makemove");

const { MoveExists } = require("./movegen");

function getPvLine(depth){
    let move = probePvTable();
    let count = 0;

    while(move !== NO_MOVE && count < depth){
        if(MoveExists(move) === BOOL.TRUE){
            MakeMove(move);
            GameBoard.pvArray[count++] = move;
        }
        else{
            break;
        }
        move = probePvTable();
    }

    while(GameBoard.ply > 0){
        UndoMove()
    }
    
    return count;
}

function probePvTable(){
    let index = GameBoard.posKey % PV_ENTRIES;

    if(GameBoard.pvTable[index].posKey === GameBoard.posKey){
        return GameBoard.pvTable[index].move;
    }
    return NO_MOVE;
}

function storePvMove(move){
    let index = GameBoard.posKey % PV_ENTRIES;
    GameBoard.pvTable[index].posKey = GameBoard.posKey;
    GameBoard.pvTable[index].move = move;
}

module.exports = {
    probePvTable,
    storePvMove,
    getPvLine
}