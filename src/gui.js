const $ = require('jquery');

const { ParseFen, 
        PrintBoard } = require("./board");

const { PerftTest } = require('./perft');

let depth = 5;

function parseFenOnAction(){
    let fenStr = $("#fenIn").val();
    ParseFen(fenStr)
    PrintBoard();
    PerftTest(depth);
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