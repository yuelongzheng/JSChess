const { GameBoard } = require("./board");

const { COLOURS,
        PIECES,
        pieceIndex,
        square64,
        mirror64Index } = require("./defs");

// Represent the board a1-h8, if a pawns land on the square it get the value in the pawnTable
// This is for white pawns only
const PawnTable = [
0	,	0	,	0	,	0	,	0	,	0	,	0	,	0	,
10	,	10	,	0	,	-10	,	-10	,	0	,	10	,	10	,
5	,	0	,	0	,	5	,	5	,	0	,	0	,	5	,
0	,	0	,	10	,	20	,	20	,	10	,	0	,	0	,
5	,	5	,	5	,	10	,	10	,	5	,	5	,	5	,
10	,	10	,	10	,	20	,	20	,	10	,	10	,	10	,
20	,	20	,	20	,	30	,	30	,	20	,	20	,	20	,
0	,	0	,	0	,	0	,	0	,	0	,	0	,	0	
];


const KnightTable = [
0	,	-10	,	0	,	0	,	0	,	0	,	-10	,	0	,
0	,	0	,	0	,	5	,	5	,	0	,	0	,	0	,
0	,	0	,	10	,	10	,	10	,	10	,	0	,	0	,
0	,	0	,	10	,	20	,	20	,	10	,	5	,	0	,
5	,	10	,	15	,	20	,	20	,	15	,	10	,	5	,
5	,	10	,	10	,	20	,	20	,	10	,	10	,	5	,
0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
0	,	0	,	0	,	0	,	0	,	0	,	0	,	0		
];

const BishopTable = [
0	,	0	,	-10	,	0	,	0	,	-10	,	0	,	0	,
0	,	0	,	0	,	10	,	10	,	0	,	0	,	0	,
0	,	0	,	10	,	15	,	15	,	10	,	0	,	0	,
0	,	10	,	15	,	20	,	20	,	15	,	10	,	0	,
0	,	10	,	15	,	20	,	20	,	15	,	10	,	0	,
0	,	0	,	10	,	15	,	15	,	10	,	0	,	0	,
0	,	0	,	0	,	10	,	10	,	0	,	0	,	0	,
0	,	0	,	0	,	0	,	0	,	0	,	0	,	0	
];

const RookTable = [
0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
25	,	25	,	25	,	25	,	25	,	25	,	25	,	25	,
0	,	0	,	5	,	10	,	10	,	5	,	0	,	0		
];

// Bonus if a side has both bishops
const BishopPair = 40;

const blackPawnTable = [
0, 0, 0, 0, 0, 0, 0, 0,
20, 20, 20, 30, 30, 20, 20, 20, 
10, 10, 10, 20, 20, 10, 10, 10, 
5, 5, 5, 10, 10, 5, 5, 5,
0, 0, 10, 20, 20, 10, 0, 0,
5, 0, 0, 5, 5, 0, 0, 5,
10, 10, 0, -10, -10, 0, 10, 10,
0, 0, 0, 0, 0, 0, 0, 0];

function evaluatePosition(){
    let score = GameBoard.material[COLOURS.WHITE] - GameBoard.material[COLOURS.BLACK];

    let piece, square, pieceNum;

    piece = PIECES.wP;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score += PawnTable[square64[square]];
    }

    piece = PIECES.bP;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score -= PawnTable[mirror64Index(square64(square))];
    }

    piece = PIECES.wN;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score += KnightTable[square64[square]];
    }

    piece = PIECES.bN;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score -= KnightTable[mirror64Index(square64(square))];
    }

    piece = PIECES.wB;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score += BishopTable[square64[square]];
    }

    piece = PIECES.bB;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score -= BishopTable[mirror64Index(square64(square))];
    }

    piece = PIECES.wR;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score += RookTable[square64[square]];
    }

    piece = PIECES.bR;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score -= RookTable[mirror64Index(square64(square))];
    }

    piece = PIECES.wQ;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score += RookTable[square64[square]]/2;
    }

    piece = PIECES.bQ;
    for(pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
        square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
        score -= RookTable[mirror64Index(square64(square))]/2;
    }

    if(GameBoard.pieceNumber[PIECES.wB] >= 2){
        score += BishopPair;
    }
    if(GameBoard.pieceNumber[PIECES.bB] >= 2){
        score -= BishopPair;
    }

    if(GameBoard.side === COLOURS.WHITE){
        return score;
    }
    else{
        return -score;
    }
}

module.exports = {
    evaluatePosition
}