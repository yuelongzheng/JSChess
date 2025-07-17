import { Definitions } from "./defs.js"
import { InOut } from "./io.js";
import { GameBoard } from "./board.js";
import { MoveGeneration } from "./movegen.js";
import { ManiupulatePiece } from "./makemove.js";
import { perft } from "./perft.js";

let defs = new Definitions();
let io = new InOut(defs);
let board = new GameBoard(defs, io);
let moveGen = new MoveGeneration(defs);
let manPiece = new ManiupulatePiece(defs);
let pt = new perft(defs, board, manPiece, moveGen, io);
let depth = 5;

$(function(){
    console.log("Main Init Called");
    board.ParseFen(defs.START_FEN);
    board.PrintBoard();
});

$("#SetFen").on("click", function(){
    let fenStr = $("#fenIn").val();
    board.ParseFen(fenStr)
    board.PrintBoard();
    pt.PerftTest(depth);
});

// When enter is pressed in the fen input box
// parse the fen string
$("#fenIn").on('keypress', function(e){
    if(e.which == 13){
        let fenStr = $("#fenIn").val();
        board.ParseFen(fenStr)
        board.PrintBoard();
        pt.PerftTest(depth);
    }
});