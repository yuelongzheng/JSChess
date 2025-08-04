const $ = require('jquery');

const { ParseFen, 
        PrintBoard } = require("./board");

const { START_FEN } = require("./defs");

const { parseFenOnClick, 
        parseFenOnEnter } = require("./gui");

// Checks if document is ready
$(function(){
    ParseFen(START_FEN);
    PrintBoard();
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

parseFenOnClick;
parseFenOnEnter;
