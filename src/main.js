const $ = require('jquery');

const { ParseFen, 
        PrintBoard } = require("./board");

const { START_FEN } = require("./defs");

const { parseFenOnClick, 
        parseFenOnEnter } = require("./gui");

$(function(){
    ParseFen(START_FEN);
    PrintBoard();
});

parseFenOnClick;
parseFenOnEnter;
