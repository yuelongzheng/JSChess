function MOVE(from, to, captured, promoted, flag){
    return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag);
}

/*
    GameBoard.moveList ->  
    GameBoard.moveListStart -> index for the first move at a gven ply 
*/
function GenerateMoves(){
    GameBoard.moveListStart[GameBoard.ply + 1] = GameBoard.moveListStart[GameBoard.ply];

    if(GameBoard.side === COLOURS.WHITE){
        let pieceType = PIECES.wP;
        for(let pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[pieceType] ; pieceNum++){
            let square = GameBoard.pieceList[pieceIndex(pieceType, pieceNum)];
            // If space infront of pawn is empty
            if(GameBoard.pieces[square + ONE_RANK_MOVE] === PIECES.EMPTY){
                // Add Pawn Move here
                // Starting pawn move
                if(RanksBoard[square] === RANKS.RANK_2 && GameBoard.pieces[square + 2 * ONE_RANK_MOVE] === PIECES.EMPTY){
                    // Add Quiet Move here
                }
            }
            // Dealing with pawn captures
            let leftDiagonal = square + 9;
            if(IsSquareOffBoard(leftDiagonal) === BOOL.FALSE && PieceCol[GameBoard.pieces[leftDiagonal]] === COLOURS.BLACK){
                // Add Pawn Capture Move
            }
            let rightDiagonal = square + 11;
            if(IsSquareOffBoard(rightDiagonal) === BOOL.FALSE && PieceCol[GameBoard.pieces[rightDiagonal]] === COLOURS.BLACK){
                // Add Pawn Capture Move
            }
            
            if(GameBoard.enPassant != SQUARES.NO_SQUARE){
                if(leftDiagonal === GameBoard.enPassant){
                     // Add En Passant Move
                }
                if(rightDiagonal === GameBoard.enPassant){
                    // Add En Passant Move
                }
            }
        }

        if(GameBoard.castlePermission & CASTLE_BIT.WHITE_KING_SIDE_CASTLE){
            // Check if no peices between king and rook
            if(GameBoard.pieces[SQUARES.F1] === PIECES.EMPTY && GameBoard.pieces[SQUARES.G1] === PIECES.EMPTY){
                // Kings can't move through a square that is being attacked and check if king is in check
                if(SquareAttacked(SQUARES.F1, COLOURS.BLACK) === BOOL.FALSE && SquareAttacked(SQUARES.E1, COLOURS.BLACK) === BOOL.FALSE){
                    // Add Quiet Move here
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
                    // Add Quiet Move here
                }
            }
        }
    }
    else {
        let pieceType = PIECES.bP;
        for(let pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[pieceType] ; pieceNum++){
            let square = GameBoard.pieceList[pieceIndex(pieceType, pieceNum)];
            // If space infront of pawn is empty
            if(GameBoard.pieces[square - ONE_RANK_MOVE] === PIECES.EMPTY){
                // Add Pawn Move here
                // Starting pawn move
                if(RanksBoard[square] === RANKS.RANK_2 && GameBoard.pieces[square - 2 * ONE_RANK_MOVE] === PIECES.EMPTY){
                    // Add Quiet Move here
                }
            }
            // Dealing with pawn captures
            let leftDiagonal = square - 9;
            if(IsSquareOffBoard(leftDiagonal) === BOOL.FALSE && PieceCol[GameBoard.pieces[leftDiagonal]] === COLOURS.WHITE){
                // Add Pawn Capture Move
            }
            let rightDiagonal = square - 11;
            if(IsSquareOffBoard(rightDiagonal) === BOOL.FALSE && PieceCol[GameBoard.pieces[rightDiagonal]] === COLOURS.WHITE){
                // Add Pawn Capture Move
            }
            
            if(GameBoard.enPassant != SQUARES.NO_SQUARE){
                if(leftDiagonal === GameBoard.enPassant){
                     // Add En Passant Move
                }
                if(rightDiagonal === GameBoard.enPassant){
                    // Add En Passant Move
                }
            }
        }

        if(GameBoard.castlePermission & CASTLE_BIT.BLACK_KING_SIDECASTLE){
            // Check if no peices between king and rook
            if(GameBoard.pieces[SQUARES.F8] === PIECES.EMPTY && GameBoard.pieces[SQUARES.G8] === PIECES.EMPTY){
                // Kings can't move through a square that is being attacked and check if king is in check
                if(SquareAttacked(SQUARES.F8, COLOURS.WHITE) === BOOL.FALSE && SquareAttacked(SQUARES.E8, COLOURS.BLACK) === BOOL.WHITE){
                    // Add Quiet Move here
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
                    // Add Quiet Move here
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
                        // add capture
                    }
                }
                else{
                    // Quiet Move
                }
            }
        }
        piece = NonSlidingPieces[index++];
    }
}