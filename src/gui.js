const $ = require('jquery');

const { ParseFen, 
        PrintBoard, 
        GameBoard,
        SquareAttacked} = require("./board");

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
        ONE_RANK_MOVE,
        GameController,
        pieceIndex,
        Kings,
        MAX_DEPTH} = require('./defs');

const { searchPosition, searchController } = require('./search');
const { PrintSquare } = require('./io');
const { MakeMove, UndoMove } = require('./makemove');
const { GenerateMoves } = require('./movegen');

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
    checkAndSet();
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
            checkAndSet();
            preSearch();
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
    if((move & MOVE_FLAG_EN_PASSANT) !== 0){
        let enPassantRemove;
        if(GameBoard.side === COLOURS.BLACK){
            enPassantRemove = to - ONE_RANK_MOVE;
        }
        else{
            enPassantRemove = to + ONE_RANK_MOVE;
        }
        removePieceInGUI(enPassantRemove);
    }
    else if(getCapturedPiece(move) !== 0){
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

function isThereMaterialDraw(){
    let pawnsExists = GameBoard.pieceNumber[PIECES.wP] !== 0 || GameBoard.pieceNumber[PIECES.bP] !== 0;
    if(pawnsExists){
        return BOOL.FALSE;
    }
    let queensExists = GameBoard.pieceNumber[PIECES.wQ] !== 0 || GameBoard.pieceNumber[PIECES.bQ] !== 0;
    let rooksExists = GameBoard.pieceNumber[PIECES.wR] !== 0 || GameBoard.pieceNumber[PIECES.bR] !== 0;
    if(queensExists || rooksExists){
        return BOOL.FALSE;
    }
    let twoKnightsExists = GameBoard.pieceNumber[PIECES.wK] !== 0 || GameBoard.pieceNumber[PIECES.bK] === 2;
    if(twoKnightsExists){
        return BOOL.FALSE;
    }
    let twoBishopsExists = GameBoard.pieceNumber[PIECES.wB] !== 0 || GameBoard.pieceNumber[PIECES.bB] === 2;
    if(twoBishopsExists){
        return BOOL.FALSE;
    }
    let whiteBishopAndWhiteKnightExist = GameBoard.pieceNumber[PIECES.wN] !== 0 && GameBoard.pieceNumber[PIECES.wB] !== 0;
    if(whiteBishopAndWhiteKnightExist){
        return BOOL.FALSE;
    }
    let blackBishopAndBlackKnightExist = GameBoard.pieceNumber[PIECES.bN] !== 0 && GameBoard.pieceNumber[PIECES.bB] !== 0;
    if(blackBishopAndBlackKnightExist){
        return BOOL.FALSE;
    }
    return BOOL.TRUE;
}

function threefoldRepetitionCheck(){
    let repetitions = 0;
    for(let i = 0 ; i < GameBoard.hisPly ; i++){
        if(GameBoard.history[i].posKey === GameBoard.posKey){
            repetitions++;
            if(repetitions === 2){
                break;
            }
        }
    }
    return repetitions;
}

function checkGameEnd(){
    if(GameBoard.fiftyMove >= 100){
        $("#GameStatus").text("GAME DRAWN {Fifty move rule}");
        return BOOL.TRUE;
    }
    if(threefoldRepetitionCheck() >= 2){
        $("#GameStatus").text("GAME DRAWN {Threefold repetition}");
        return BOOL.TRUE;
    }
    if(isThereMaterialDraw() === BOOL.TRUE){
        $("#GameStatus").text("GAME DRAWN {Insufficent material to mate}");
        return BOOL.TRUE;
    }

    GenerateMoves();

    let found = 0;
    for(let moveNum = GameBoard.moveListStart[GameBoard.ply] ; moveNum < GameBoard.moveListStart[GameBoard.ply + 1] ; moveNum++){
        if(MakeMove(GameBoard.moveList[moveNum]) === BOOL.FALSE){
            continue;
        }
        found++;
        UndoMove();
        break;
    }

    if(found !== 0){
        return BOOL.FALSE;
    }

    let inCheck = SquareAttacked(GameBoard.pieceList[pieceIndex(Kings[GameBoard.side], 0)], GameBoard.side^1);
    if(inCheck === BOOL.TRUE){
        if(GameBoard.side === COLOURS.WHITE){
            $("#GameStatus").text("GAME OVER {Black Mates}");
            return BOOL.TRUE;
        }
        else{
            $("#GameStatus").text("GAME OVER {White Mates}");
            return BOOL.TRUE;
        }
    }
    else{
        $("#GameStatus").text("GAME OVER {Stalemate}");
        return BOOL.TRUE;
    }
}

function checkAndSet(){
    if(checkGameEnd() === BOOL.TRUE){
        GameController.GameOver = BOOL.TRUE;
    }
    else{
        GameController.GameOver = BOOL.FALSE;
        $("#GameStatus").text("");
    }
}

function parseMove(from, to){
    GenerateMoves();

    let move = NO_MOVE;
    let promoted_piece = PIECES.EMPTY;
    let found = BOOL.FALSE;

    for(let i = GameBoard.moveListStart[GameBoard.ply] ; i < GameBoard.moveListStart[GameBoard.ply + 1] ; i++){
        move = GameBoard.moveList[i];
        if( (getFromSquare(move) === from) && (getToSquare(move) === to)){
            promoted_piece = getPromotion(move);
            if(promoted_piece !== PIECES.EMPTY){
                if( (promoted_piece === PIECES.wQ && GameBoard.side === COLOURS.WHITE) ||
                    (promoted_piece === PIECES.bQ && GameBoard.side === COLOURS.BLACK)) {
                        found = BOOL.FALSE;
                        break;
                }
                continue;
            }
            found = BOOL.TRUE;
            break;
        }
    }
    if(found !== BOOL.FALSE){
        if(MakeMove(move) === BOOL.FALSE){
            return NO_MOVE;
        }
        UndoMove();
        return move;
    }
    return NO_MOVE;
}

function startSearch(){
    searchController.depth = MAX_DEPTH;
    let thinkingTime = $("#ThinkTimeChoice").val();

    searchController.time = parseInt(thinkingTime) * 1000;
    searchPosition();
    MakeMove(searchController.bestMove);
    movePieceInGUI(searchController.bestMove);
    checkAndSet();
}

function preSearch(){
    if(GameController.GameOver === BOOL.FALSE){
        searchController.thinking = BOOL.TRUE;
        setTimeout(function(){ startSearch();}, 200);
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

const startSearchNow = $("#SearchButton").on('click', function(){
    GameController.PlayerSide = GameController.side ^ 1;
    preSearch();
});

const undoPreviousMove = $('#UndoButton').on('click', function(){
    if(GameBoard.hisPly > 0){
        UndoMove();
        GameBoard.ply = 0;
        setInitialBoardPieces();
    }
});

const createNewGame = $('#NewGameButton').on('click', function(){
    newGame(START_FEN);
});

module.exports = {
    parseFenOnClick,
    parseFenOnEnter,
    clickPiece,
    clickSquare,
    newGame
}