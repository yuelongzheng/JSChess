const $ = require('jquery');

const { ParseFen, 
        PrintBoard } = require("./board");

const { PerftTest } = require('./perft');

const { START_FEN } = require('./defs');

const { searchPosition } = require('./search');

let depth = 5;

function parseFenOnAction(){
    let fenStr = $("#fenIn").val();
    ParseFen(fenStr);
    PrintBoard();
    searchPosition();
};

const parseFenOnClick = $("#SetFen").on("click", function(){
    parseFenOnAction();
});

// When enter is pressed in the fen input box
// parse the fen string
const parseFenOnEnter = $("#fenIn").on('keypress', function(e){
    if(e.which == 13){
        parseFenOnAction();
    }
});


module.exports = {
    parseFenOnClick,
    parseFenOnEnter
}