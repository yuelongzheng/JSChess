const { GameBoard, 
        SquareAttacked, 
        IsSquareOffBoard } = require("./board");

const { PIECES, 
        RANKS, 
        RanksBoard, 
        COLOURS, 
        pieceIndex, 
        ONE_RANK_MOVE, 
        MOVE_FLAG_PAWN_START, 
        PieceCol, 
        SQUARES, 
        MOVE_FLAG_EN_PASSANT, 
        CASTLE_BIT,
        NonSlidingStartingIndex,
        NonSlidingPieces,
        PieceToDirectionsLength,
        PieceToDirections,
        BOOL,
        SlidingPiecesStartingIndex,
        SlidingPieces, 
        MOVE_FLAG_CASTLE} = require("./defs");

function MOVE(from, to, captured, promoted, flag){
    return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag);
}

function AddCaptureMove(move){
    GameBoard.moveList[GameBoard.moveListStart[GameBoard.ply + 1] ] = move;
    GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1]++] = 0; // For alpha-beta search ordering
}

// Quiet moves are moves that do not alter material
function AddQuietMove(move){
    GameBoard.moveList[GameBoard.moveListStart[GameBoard.ply + 1] ] = move;
    GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1]++] = 0; // For alpha-beta search ordering
}

function AddEnPassantMove(move){
    GameBoard.moveList[GameBoard.moveListStart[GameBoard.ply + 1] ] = move;
    GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1]++] = 0; // For alpha-beta search ordering
}

function AddWhitePawnCaptureMove(from, to, capture){
    if(RanksBoard[from] === RANKS.RANK_7){
        AddCaptureMove(MOVE(from, to, capture, PIECES.wQ, 0));
        AddCaptureMove(MOVE(from, to, capture, PIECES.wR, 0));
        AddCaptureMove(MOVE(from, to, capture, PIECES.wB, 0));
        AddCaptureMove(MOVE(from, to, capture, PIECES.wN, 0));
    }
    else{
        AddCaptureMove(MOVE(from, to, capture, PIECES.EMPTY, 0));
    }
}

function AddBlackPawnCaptureMove(from, to, capture){
    if(RanksBoard[from] === RANKS.RANK_2){
        AddCaptureMove(MOVE(from, to, capture, PIECES.bQ, 0));
        AddCaptureMove(MOVE(from, to, capture, PIECES.bR, 0));
        AddCaptureMove(MOVE(from, to, capture, PIECES.bB, 0));
        AddCaptureMove(MOVE(from, to, capture, PIECES.bN, 0));
    }
    else{
        AddCaptureMove(MOVE(from, to, capture, PIECES.EMPTY, 0));
    }
}

function AddWhitePawnQuietMove(from, to){
    if(RanksBoard[from] === RANKS.RANK_7){
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wQ, 0))
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wR, 0))
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wB, 0))
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wN, 0))
    }
    else{
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.EMPTY, 0));
    }
}

function AddBlackPawnQuietMove(from, to){
    if(RanksBoard[from] === RANKS.RANK_2){
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bQ, 0))
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bR, 0))
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bB, 0))
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bN, 0))
    }
    else{
        AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.EMPTY, 0));
    }
}

/*
    GameBoard.moveList ->  
    GameBoard.moveListStart -> index for the first move at a gven ply 
*/
function GenerateMoves(){
    GameBoard.moveListStart[GameBoard.ply + 1] = GameBoard.moveListStart[GameBoard.ply];

    if(GameBoard.side === COLOURS.WHITE){
        let pieceType = PIECES.wP;
        let square;
        for(let pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[pieceType] ; pieceNum++){
            square = GameBoard.pieceList[pieceIndex(pieceType, pieceNum)];
            // If space infront of pawn is empty
            if(GameBoard.pieces[square + ONE_RANK_MOVE] === PIECES.EMPTY){
                AddWhitePawnQuietMove(square, square + ONE_RANK_MOVE);
                if(RanksBoard[square] === RANKS.RANK_2 && GameBoard.pieces[square + 2 * ONE_RANK_MOVE] === PIECES.EMPTY){
                    AddQuietMove(MOVE(square, square + 2 * ONE_RANK_MOVE, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_PAWN_START));
                }
            }
            // Dealing with pawn captures
            let leftDiagonal = square + 9;
            if(IsSquareOffBoard(leftDiagonal) === BOOL.FALSE && PieceCol[GameBoard.pieces[leftDiagonal]] === COLOURS.BLACK){
                AddWhitePawnCaptureMove(square, leftDiagonal, GameBoard.pieces[leftDiagonal]);
            }
            let rightDiagonal = square + 11;
            if(IsSquareOffBoard(rightDiagonal) === BOOL.FALSE && PieceCol[GameBoard.pieces[rightDiagonal]] === COLOURS.BLACK){
                AddWhitePawnCaptureMove(square, rightDiagonal, GameBoard.pieces[rightDiagonal]);
            }
            
            if(GameBoard.enPassant !== SQUARES.NO_SQUARE){
                if(leftDiagonal === GameBoard.enPassant){
                    AddEnPassantMove(MOVE(square, leftDiagonal, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_EN_PASSANT));
                }
                if(rightDiagonal === GameBoard.enPassant){
                    AddEnPassantMove(MOVE(square, rightDiagonal, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_EN_PASSANT));
                }
            }
        }

        if(GameBoard.castlePermission & CASTLE_BIT.WHITE_KING_SIDE_CASTLE){
            // Check if no peices between king and rook
            if(GameBoard.pieces[SQUARES.F1] === PIECES.EMPTY && GameBoard.pieces[SQUARES.G1] === PIECES.EMPTY){
                // Kings can't move through a square that is being attacked and check if king is in check
                if(SquareAttacked(SQUARES.F1, COLOURS.BLACK) === BOOL.FALSE && SquareAttacked(SQUARES.E1, COLOURS.BLACK) === BOOL.FALSE){
                    AddQuietMove(MOVE(SQUARES.E1, SQUARES.G1, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_CASTLE));
                }
            }
        }
        if(GameBoard.castlePermission & CASTLE_BIT.WHITE_QUEEN_SIDE_CASTLE){
            // Check if no peices between king and rook
            if(GameBoard.pieces[SQUARES.D1] === PIECES.EMPTY && GameBoard.pieces[SQUARES.C1] === PIECES.EMPTY
                && GameBoard.pieces[SQUARES.B1] === PIECES.EMPTY
            ){
                // Kings can't move through a square that is being attacked and check if king is in check
                if(SquareAttacked(SQUARES.D1, COLOURS.BLACK) === BOOL.FALSE && SquareAttacked(SQUARES.E1, COLOURS.BLACK) === BOOL.FALSE){
                    AddQuietMove(MOVE(SQUARES.E1, SQUARES.C1, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_CASTLE));
                }
            }
        }
    }
    else {
        let pieceType = PIECES.bP;
        let square;
        for(let pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[pieceType] ; pieceNum++){
            square = GameBoard.pieceList[pieceIndex(pieceType, pieceNum)];
            // If space infront of pawn is empty
            if(GameBoard.pieces[square - ONE_RANK_MOVE] === PIECES.EMPTY){
                AddBlackPawnQuietMove(square, square - ONE_RANK_MOVE);
                if(RanksBoard[square] === RANKS.RANK_7 && GameBoard.pieces[square - 2 * ONE_RANK_MOVE] === PIECES.EMPTY){
                    AddQuietMove(MOVE(square, square - 2 * ONE_RANK_MOVE, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_PAWN_START));
                }
            }
            // Dealing with pawn captures
            let leftDiagonal = square - 9;
            if(IsSquareOffBoard(leftDiagonal) === BOOL.FALSE && PieceCol[GameBoard.pieces[leftDiagonal]] === COLOURS.WHITE){
                AddBlackPawnCaptureMove(square, leftDiagonal, GameBoard.pieces[leftDiagonal]);
            }
            let rightDiagonal = square - 11;
            if(IsSquareOffBoard(rightDiagonal) === BOOL.FALSE && PieceCol[GameBoard.pieces[rightDiagonal]] === COLOURS.WHITE){
                AddBlackPawnCaptureMove(square, rightDiagonal, GameBoard.pieces[rightDiagonal]);
            }
            
            if(GameBoard.enPassant !== SQUARES.NO_SQUARE){
                if(leftDiagonal === GameBoard.enPassant){
                    AddEnPassantMove(MOVE(square, leftDiagonal, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_EN_PASSANT));
                }
                if(rightDiagonal === GameBoard.enPassant){
                    AddEnPassantMove(MOVE(square, rightDiagonal, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_EN_PASSANT));
                }
            }
        }

        if(GameBoard.castlePermission & CASTLE_BIT.BLACK_KING_SIDE_CASTLE){
            // Check if no peices between king and rook
            if(GameBoard.pieces[SQUARES.F8] === PIECES.EMPTY && GameBoard.pieces[SQUARES.G8] === PIECES.EMPTY){
                // Kings can't move through a square that is being attacked and check if king is in check
                if(SquareAttacked(SQUARES.F8, COLOURS.WHITE) === BOOL.FALSE && SquareAttacked(SQUARES.E8, COLOURS.WHITE) === BOOL.FALSE){
                    AddQuietMove(MOVE(SQUARES.E8, SQUARES.G8, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_CASTLE));
                }
            }
        }
        if(GameBoard.castlePermission & CASTLE_BIT.BLACK_QUEEN_SIDE_CASTLE){
            // Check if no peices between king and rook
            if(GameBoard.pieces[SQUARES.D8] === PIECES.EMPTY && GameBoard.pieces[SQUARES.C8] === PIECES.EMPTY
                && GameBoard.pieces[SQUARES.B8] === PIECES.EMPTY
            ){
                // Kings can't move through a square that is being attacked and check if king is in check
                if(SquareAttacked(SQUARES.D8, COLOURS.WHITE) === BOOL.FALSE && SquareAttacked(SQUARES.E8, COLOURS.WHITE) === BOOL.FALSE){
                    AddQuietMove(MOVE(SQUARES.E8, SQUARES.C8, PIECES.EMPTY, PIECES.EMPTY, MOVE_FLAG_CASTLE));
                }
            }
        }
    }

    let index = NonSlidingStartingIndex[GameBoard.side];
    let piece = NonSlidingPieces[index++];
    while(piece !== 0){
        for(let pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
            let square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
            for(let i = 0 ; i < PieceToDirectionsLength[piece] ; i++){
                let direction = PieceToDirections[piece][i];
                let target_square = square + direction;
                if(IsSquareOffBoard(target_square) === BOOL.TRUE){
                    continue;
                }
                if(GameBoard.pieces[target_square] !== PIECES.EMPTY){
                    if(PieceCol[GameBoard.pieces[target_square]] !== GameBoard.side){
                        AddCaptureMove(MOVE(square, target_square, GameBoard.pieces[target_square], PIECES.EMPTY, 0));
                    }
                }
                else{
                    AddQuietMove(MOVE(square, target_square, PIECES.EMPTY, PIECES.EMPTY, 0));
                }
            }
        }
        piece = NonSlidingPieces[index++];
    }

    index = SlidingPiecesStartingIndex[GameBoard.side];
    piece = SlidingPieces[index++];
    while(piece !== 0){
        for(let pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
            let square = GameBoard.pieceList[pieceIndex(piece, pieceNum)];
            for(let i = 0 ; i < PieceToDirectionsLength[piece] ; i++){
                let direction = PieceToDirections[piece][i];
                let target_square = square + direction;
                while(IsSquareOffBoard(target_square) === BOOL.FALSE){
                    if(GameBoard.pieces[target_square] !== PIECES.EMPTY){
                        if(PieceCol[GameBoard.pieces[target_square]] !== GameBoard.side){
                            AddCaptureMove(MOVE(square, target_square, GameBoard.pieces[target_square], PIECES.EMPTY, 0));
                        }
                        break;
                    }
                    AddQuietMove(MOVE(square, target_square, PIECES.EMPTY, PIECES.EMPTY, 0));
                    target_square += direction;
                }
            }
        }
        piece = SlidingPieces[index++];
    }
}

module.exports = {
    GenerateMoves
}