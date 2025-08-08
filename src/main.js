const $ = require('jquery');

const { START_FEN } = require("./defs");

const { newGame } = require("./gui");

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
