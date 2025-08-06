const $ = require('jquery');

const { ParseFen, 
        PrintBoard, 
        InitBoardVariables} = require("./board");

const { START_FEN, RANKS, FILES } = require("./defs");

const { parseFenOnClick, 
        parseFenOnEnter, 
        newGame,
        clickPiece,
        clickSquare} = require("./gui");

// Checks if document is ready
$(function(){
    newGame(START_FEN);
});

// Javascript version of the above
// function ready(fn) {
//   if (document.readyState !== 'loading') {
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }

// ready(function(){
//     ParseFen(START_FEN);
//     PrintBoard(); 
// })

function initBoardSquares(){
    let light = 1;
    let rankName, fileName, divString, lightString;
    for(let r = RANKS.RANK_8 ; r >= RANKS.RANK_1 ; r--){
        light ^= 1;
        rankName = "Rank" + (r + 1);
        for(let f = FILES.FILE_A ; f <= FILES.FILE_H ; f++){
            fileName = "File" + (f + 1);
            if(light === 0){
                lightString = "Light";
            }
            else{
                lightString = "Dark";
            }
            light ^= 1;
            divString = "<div class=\"Square " + rankName + " " + fileName + " " + lightString + "\"/>";
            $("#Board").append(divString);
        }
    }
}

initBoardSquares();
parseFenOnClick;
parseFenOnEnter;
clickPiece;
clickSquare;