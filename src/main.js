import $ from 'jquery'

import { START_FEN } from './defs';

import { ParseFen,
         PrintBoard } from './board';

import { parseFenOnClick, 
        parseFenOnEnter } from './gui';

$(function(){
    console.log("Main init Called");
    ParseFen(START_FEN);
    PrintBoard();
});

parseFenOnClick
parseFenOnEnter
