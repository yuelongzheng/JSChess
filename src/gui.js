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
        BOOL, 
        getFromSquare,
        getToSquare,
        MOVE_FLAG_EN_PASSANT,
        COLOURS,
        getCapturedPiece,
        MOVE_FLAG_CASTLE,
        getPromotion,
        ONE_RANK_MOVE} = require('./defs');

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

function addPieceInGUI(square, piece){
    let file = FilesBoard[square];
    let rank = RanksBoard[square];
    let rankName = "Rank" + (rank + 1);
    let fileName = "File" + (file + 1);
    let imagePath = "images/" + SideChar[PieceCol[piece]] + PieceChar[piece].toUpperCase() + ".png";
    let imageString = "<image src=\"" + imagePath + "\" class = \"Piece "  + rankName + " " + fileName + "\"/>";
    $("#Board").append(imageString);
}

function setInitialBoardPieces(){
    let pieceSquare, piece;

    clearAllPieces();

    for(let square = 0 ; square < 64 ; square++){
        pieceSquare = square120(square);
        piece = GameBoard.pieces[pieceSquare];
        if(piece >= PIECES.wP && piece <= PIECES.bK){
            addPieceInGUI(pieceSquare, piece);
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
    $('.Square').each(function(){
        if(pieceIsOnSquare(square, $(this).position().top, $(this).position().left) === BOOL.TRUE){
            $(this).removeClass("SquareSelected");
        }
    });
}

function setSquareSelected(square){
    $('.Square').each(function(){
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
            movePieceInGUI(parsed);
        }

        deselectSquare(UserMove.from);
        deselectSquare(UserMove.to);

        UserMove.from = SQUARES.NO_SQUARE;
        UserMove.to = SQUARES.NO_SQUARE;
    }
}

function removePieceInGUI(square){
    $('.Piece').each(function(){
        if(pieceIsOnSquare(square, $(this).position().top, $(this).position().left) === BOOL.TRUE){
            $(this).remove();
        }
    });
}

function movePieceInGUI(move){
    let from = getFromSquare(move);
    let to = getToSquare(move);
    if(move & MOVE_FLAG_EN_PASSANT !== 0){
        let enPassantRemove;
        if(GameBoard.side === COLOURS.BLACK){
            enPassantRemove = to - ONE_RANK_MOVE;
        }
        else{
            enPassantRemove = to + ONE_RANK_MOVE;
        }
        removePieceInGUI(enPassantRemove);
    }
    else if(getCapturedPiece(move)){
        removePieceInGUI(to);
    }

    let file = FilesBoard[to];
    let rank = RanksBoard[to];
    let rankName = "Rank" + (rank + 1);
    let fileName = "File" + (file + 1);

    $('.Piece').each(function(){
        if(pieceIsOnSquare(from, $(this).position().top, $(this).position().left) === BOOL.TRUE){
            $(this).removeClass();
            $(this).addClass("Piece " + rankName + " " + fileName);
        }
    });

    if((move & MOVE_FLAG_CASTLE) !== 0){
        switch(to){
            case SQUARES.G1:
                removePieceInGUI(SQUARES.H1);
                addPieceInGUI(SQUARES.F1, PIECES.wR);
                break;
            case SQUARES.C1:
                removePieceInGUI(SQUARES.A1);
                addPieceInGUI(SQUARES.D1, PIECES.wR);
                break;
            case SQUARES.G8:
                removePieceInGUI(SQUARES.H8);
                addPieceInGUI(SQUARES.F8, PIECES.bR);
                break;
            case SQUARES.C8:
                removePieceInGUI(SQUARES.A8);
                addPieceInGUI(SQUARES.D8, PIECES.bR);
                break;
            default:
                break;
        }
    }
    else if((getPromotion(move)) !== 0 ){
        removePieceInGUI(to);
        addPieceInGUI(to, getPromotion(move));
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