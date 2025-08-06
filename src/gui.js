const $ = require('jquery');

const { ParseFen, 
        PrintBoard, 
        GameBoard} = require("./board");

const { PerftTest } = require('./perft');

const { START_FEN,
        square120, 
        FilesBoard, 
        RanksBoard, 
        PIECES, 
        SideChar, 
        PieceCol, 
        PieceChar, 
        FileRankToSquare, 
        UserMove, 
        SQUARES, 
        NO_MOVE, 
        BOOL } = require('./defs');

const { searchPosition } = require('./search');
const { PrintSquare } = require('./io');
const { MakeMove } = require('./makemove');
const { parseMove } = require('./movegen');

function parseFenOnAction(){
    let fenStr = $("#fenIn").val();
    newGame(fenStr);
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

function clearAllPieces(){
    $(".Piece").remove();
}

function setInitialBoardPieces(){
    let pieceSquare, piece, file, rank, rankName, fileName, imagePath;
    let imageString;

    clearAllPieces();

    for(let square = 0 ; square < 64 ; square++){
        pieceSquare = square120(square);
        piece = GameBoard.pieces[pieceSquare];
        file = FilesBoard[pieceSquare];
        rank = RanksBoard[pieceSquare];

        if(piece >= PIECES.wP && piece <= PIECES.bK){
            rankName = "Rank" + (rank + 1);
            fileName = "File" + (file + 1);
            imagePath = "images/" + SideChar[PieceCol[piece]] + PieceChar[piece].toUpperCase() + ".png";
            imageString = "<image src=\"" + imagePath + "\" class = \"Piece "  + rankName + " " + fileName + "\"/>";
            $("#Board").append(imageString);
        }
    }
}

function newGame(fenStr){
    ParseFen(fenStr);
    PrintBoard();
    setInitialBoardPieces();
}

function pieceIsOnSquare(square, top, left){
    if((RanksBoard[square] === 7 - Math.round(top/60)) &&
        (FilesBoard[square] === Math.round(left/60))){
            return BOOL.TRUE;
    }
    return BOOL.FALSE;
}

function deselectSquare(square){
    $('.Square').each(function(index){
        if(pieceIsOnSquare(square, $(this).position().top, $(this).position().left) === BOOL.TRUE){
            $(this).removeClass("SquareSelected");
        }
    });
}

function setSquareSelected(square){
    $('.Square').each(function(index){
        if(pieceIsOnSquare(square, $(this).position().top, $(this).position().left) === BOOL.TRUE){
            $(this).addClass("SquareSelected");
        }
    });
}

function clickedSquare(pageX, pageY){
    let position = $('#Board').position();

    let boardOriginX = Math.floor(position.left);
    let boardOriginY = Math.floor(position.top);

    pageX = Math.floor(pageX);
    pageY = Math.floor(pageY);
    
    let file = Math.floor((pageX - boardOriginX) / 60);
    let rank = 7 - Math.floor((pageY - boardOriginY) / 60);

    let square = FileRankToSquare(file, rank);
    console.log("Clicked Square : " + PrintSquare(square));
    setSquareSelected(square);
    return square;
}

function makeUserMove(){
    if(UserMove.from !== SQUARES.NO_SQUARE && UserMove.to !== SQUARES.NO_SQUARE){
        console.log("User Move: " + PrintSquare(UserMove.from) + PrintSquare(UserMove.to));

        let parsed = parseMove(UserMove.from, UserMove.to);

        if(parsed !== NO_MOVE){
            MakeMove(parsed);
            PrintBoard();
        }

        deselectSquare(UserMove.from);
        deselectSquare(UserMove.to);

        UserMove.from = SQUARES.NO_SQUARE;
        UserMove.to = SQUARES.NO_SQUARE;
    }
}

const clickPiece = $(document).on('click', '.Piece', function (e){
    console.log('Piece Click');
    if(UserMove.from === SQUARES.NO_SQUARE){
        UserMove.from = clickedSquare(e.pageX, e.pageY);
    }
    else{
        UserMove.to = clickedSquare(e.pageX, e.pageY);
    }
    makeUserMove();
});

const clickSquare = $(document).on('click', '.Square', function (e){
    console.log('Square Click');
    if(UserMove.from !== SQUARES.NO_SQUARE){
        UserMove.to = clickedSquare(e.pageX, e.pageY);
        makeUserMove();
    }
});


module.exports = {
    parseFenOnClick,
    parseFenOnEnter,
    clickPiece,
    clickSquare,
    newGame
}