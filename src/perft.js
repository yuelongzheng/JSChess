const { GameBoard, PrintBoard } = require("./board");

const { BOOL } = require("./defs");

const { PrintMove } = require("./io");

const { MakeMove, UndoMove } = require("./makemove");

const { GenerateMoves } = require("./movegen");

let perft_leafNodes;

function Perft(depth){
    if(depth === 0){
        perft_leafNodes++;
        return;
    }
    GenerateMoves();
    let move;
    for(let i = GameBoard.moveListStart[GameBoard.ply]; i < GameBoard.moveListStart[GameBoard.ply + 1] ; i++){
        move = GameBoard.moveList[i];
        if(MakeMove(move) === BOOL.FALSE){
            continue;
        }
        Perft(depth - 1);
        UndoMove(); 
    }
    return;
}

function PerftTest(depth){
    PrintBoard();
    console.log("Starting Test To Depth : " + depth);
    perft_leafNodes = 0;
    GenerateMoves();
    let move;
    let moveNum = 0;
    for(let i = GameBoard.moveListStart[GameBoard.ply]; i < GameBoard.moveListStart[GameBoard.ply + 1] ; i++){
        move = GameBoard.moveList[i];
        if(MakeMove(move) === BOOL.FALSE){
            continue;
        }
        moveNum++;
        let cumulative_nodes = perft_leafNodes;
        Perft(depth - 1);
        UndoMove();
        let oldNodes = perft_leafNodes - cumulative_nodes;
        console.log("move: " + moveNum + " " + PrintMove(move) + " " + oldNodes);
    }

    console.log("Test Complete : " + perft_leafNodes + " leaf nodes visited");
    return perft_leafNodes;
}

module.exports = {
    PerftTest
}