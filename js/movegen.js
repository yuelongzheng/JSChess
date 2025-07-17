export class MoveGeneration{
    constructor(definitions){
        this.defs = definitions;
    }

    MOVE(from, to, captured, promoted, flag){
        return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag);
    }

    AddCaptureMove(board, move){
        board.moveList[board.moveListStart[board.ply + 1] ] = move;
        board.moveScores[board.moveListStart[board.ply + 1]++] = 0; // For alpha-beta search ordering
    }

    // Quiet moves are moves that do not alter material
    AddQuietMove(board, move){
        board.moveList[board.moveListStart[board.ply + 1] ] = move;
        board.moveScores[board.moveListStart[board.ply + 1]++] = 0; // For alpha-beta search ordering
    }

    AddEnPassantMove(board, move){
        board.moveList[board.moveListStart[board.ply + 1] ] = move;
        board.moveScores[board.moveListStart[board.ply + 1]++] = 0; // For alpha-beta search ordering
    }

    AddWhitePawnCaptureMove(board, from, to, capture){
        if(this.defs.RanksBoard[from] === this.defs.RANKS.RANK_7){
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.wQ, 0));
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.wR, 0));
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.wB, 0));
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.wN, 0));
        }
        else{
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.EMPTY, 0));
        }
    }

    AddBlackPawnCaptureMove(board, from, to, capture){
        if(this.defs.RanksBoard[from] === this.defs.RANKS.RANK_2){
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.bQ, 0));
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.bR, 0));
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.bB, 0));
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.bN, 0));
        }
        else{
            this.AddCaptureMove(board, this.MOVE(from, to, capture, this.defs.PIECES.EMPTY, 0));
        }
    }

    AddWhitePawnQuietMove(board, from, to){
        if(this.defs.RanksBoard[from] === this.defs.RANKS.RANK_7){
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.wQ, 0))
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.wR, 0))
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.wB, 0))
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.wN, 0))
        }
        else{
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, 0));
        }
    }

    AddBlackPawnQuietMove(board, from, to){
        if(this.defs.RanksBoard[from] === this.defs.RANKS.RANK_2){
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.bQ, 0))
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.bR, 0))
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.bB, 0))
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.bN, 0))
        }
        else{
            this.AddQuietMove(board, this.MOVE(from, to, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, 0));
        }
    }

    GenerateMoves(board){
        board.moveListStart[board.ply + 1] = board.moveListStart[board.ply];

        if(board.side === this.defs.COLOURS.WHITE){
            let pieceType = this.defs.PIECES.wP;
            let square;
            for(let pieceNum = 0 ; pieceNum < board.pieceNumber[pieceType] ; pieceNum++){
                square = board.pieceList[this.defs.pieceIndex(pieceType, pieceNum)];
                // If space infront of pawn is empty
                if(board.pieces[square + this.defs.ONE_RANK_MOVE] === this.defs.PIECES.EMPTY){
                    this.AddWhitePawnQuietMove(board, square, square + this.defs.ONE_RANK_MOVE);
                    if(this.defs.RanksBoard[square] === this.defs.RANKS.RANK_2 && board.pieces[square + 2 * this.defs.ONE_RANK_MOVE] === this.defs.PIECES.EMPTY){
                        this.AddQuietMove(board, this.MOVE(square, square + 2 * this.defs.ONE_RANK_MOVE, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_PAWN_START));
                    }
                }
                // Dealing with pawn captures
                let leftDiagonal = square + 9;
                if(this.defs.IsSquareOffBoard(board, leftDiagonal) === this.defs.BOOL.FALSE && this.defs.PieceCol[board.pieces[leftDiagonal]] === this.defs.COLOURS.BLACK){
                    this.AddWhitePawnCaptureMove(board, square, leftDiagonal, board.pieces[leftDiagonal]);
                }
                let rightDiagonal = square + 11;
                if(this.defs.IsSquareOffBoard(board, rightDiagonal) === this.defs.BOOL.FALSE && this.defs.PieceCol[board.pieces[rightDiagonal]] === this.defs.COLOURS.BLACK){
                    this.AddWhitePawnCaptureMove(board, square, rightDiagonal, board.pieces[rightDiagonal]);
                }
                
                if(board.enPassant !== this.defs.SQUARES.NO_SQUARE){
                    if(leftDiagonal === board.enPassant){
                        this.AddEnPassantMove(board, this.MOVE(square, leftDiagonal, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_EN_PASSANT));
                    }
                    if(rightDiagonal === board.enPassant){
                        this.AddEnPassantMove(board, this.MOVE(square, rightDiagonal, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_EN_PASSANT));
                    }
                }
            }

            if(board.castlePermission & this.defs.CASTLE_BIT.WHITE_KING_SIDE_CASTLE){
                // Check if no peices between king and rook
                if(board.pieces[this.defs.SQUARES.F1] === this.defs.PIECES.EMPTY && board.pieces[this.defs.SQUARES.G1] === this.defs.PIECES.EMPTY){
                    // Kings can't move through a square that is being attacked and check if king is in check
                    if(board.SquareAttacked(this.defs.SQUARES.F1, this.defs.COLOURS.BLACK) === this.defs.BOOL.FALSE && board.SquareAttacked(this.defs.SQUARES.E1, this.defs.COLOURS.BLACK) === this.defs.BOOL.FALSE){
                        this.AddQuietMove(board, this.MOVE(this.defs.SQUARES.E1, this.defs.SQUARES.G1, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_CASTLE));
                    }
                }
            }
            if(board.castlePermission & this.defs.CASTLE_BIT.WHITE_QUEEN_SIDE_CASTLE){
                // Check if no peices between king and rook
                if(board.pieces[this.defs.SQUARES.D1] === this.defs.PIECES.EMPTY && board.pieces[this.defs.SQUARES.C1] === this.defs.PIECES.EMPTY
                    && board.pieces[this.defs.SQUARES.B1] === this.defs.PIECES.EMPTY
                ){
                    // Kings can't move through a square that is being attacked and check if king is in check
                    if(board.SquareAttacked(this.defs.SQUARES.D1, this.defs.COLOURS.BLACK) === this.defs.BOOL.FALSE && board.SquareAttacked(this.defs.SQUARES.E1, this.defs.COLOURS.BLACK) === this.defs.BOOL.FALSE){
                        this.AddQuietMove(board, this.MOVE(this.defs.SQUARES.E1, this.defs.SQUARES.C1, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_CASTLE));
                    }
                }
            }
        }
        else {
            let pieceType = this.defs.PIECES.bP;
            let square;
            for(let pieceNum = 0 ; pieceNum < board.pieceNumber[pieceType] ; pieceNum++){
                square = board.pieceList[this.defs.pieceIndex(pieceType, pieceNum)];
                // If space infront of pawn is empty
                if(board.pieces[square - this.defs.ONE_RANK_MOVE] === this.defs.PIECES.EMPTY){
                    this.AddBlackPawnQuietMove(board, square, square - this.defs.ONE_RANK_MOVE);
                    if(this.defs.RanksBoard[square] === this.defs.RANKS.RANK_7 && board.pieces[square - 2 * this.defs.ONE_RANK_MOVE] === this.defs.PIECES.EMPTY){
                        this.AddQuietMove(board, this.MOVE(square, square - 2 * this.defs.ONE_RANK_MOVE, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_PAWN_START));
                    }
                }
                // Dealing with pawn captures
                let leftDiagonal = square - 9;
                if(this.defs.IsSquareOffBoard(board, leftDiagonal) === this.defs.BOOL.FALSE && this.defs.PieceCol[board.pieces[leftDiagonal]] === this.defs.COLOURS.WHITE){
                    this.AddBlackPawnCaptureMove(board, square, leftDiagonal, board.pieces[leftDiagonal]);
                }
                let rightDiagonal = square - 11;
                if(this.defs.IsSquareOffBoard(board, rightDiagonal) === this.defs.BOOL.FALSE && this.defs.PieceCol[board.pieces[rightDiagonal]] === this.defs.COLOURS.WHITE){
                    this.AddBlackPawnCaptureMove(board, square, rightDiagonal, board.pieces[rightDiagonal]);
                }
                
                if(board.enPassant !== this.defs.SQUARES.NO_SQUARE){
                    if(leftDiagonal === board.enPassant){
                        this.AddEnPassantMove(board, this.MOVE(square, leftDiagonal, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_EN_PASSANT));
                    }
                    if(rightDiagonal === board.enPassant){
                        this.AddEnPassantMove(board, this.MOVE(square, rightDiagonal, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_EN_PASSANT));
                    }
                }
            }

            if(board.castlePermission & this.defs.CASTLE_BIT.BLACK_KING_SIDE_CASTLE){
                // Check if no peices between king and rook
                if(board.pieces[this.defs.SQUARES.F8] === this.defs.PIECES.EMPTY && board.pieces[this.defs.SQUARES.G8] === this.defs.PIECES.EMPTY){
                    // Kings can't move through a square that is being attacked and check if king is in check
                    if(board.SquareAttacked(this.defs.SQUARES.F8, this.defs.COLOURS.WHITE) === this.defs.BOOL.FALSE && board.SquareAttacked(this.defs.SQUARES.E8, this.defs.COLOURS.WHITE) === this.defs.BOOL.FALSE){
                        this.AddQuietMove(board, this.MOVE(this.defs.SQUARES.E8, this.defs.SQUARES.G8, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_CASTLE));
                    }
                }
            }
            if(board.castlePermission & this.defs.CASTLE_BIT.BLACK_QUEEN_SIDE_CASTLE){
                // Check if no peices between king and rook
                if(board.pieces[this.defs.SQUARES.D8] === this.defs.PIECES.EMPTY && board.pieces[this.defs.SQUARES.C8] === this.defs.PIECES.EMPTY
                    && board.pieces[this.defs.SQUARES.B8] === this.defs.PIECES.EMPTY
                ){
                    // Kings can't move through a square that is being attacked and check if king is in check
                    if(board.SquareAttacked(this.defs.SQUARES.D8, this.defs.COLOURS.WHITE) === this.defs.BOOL.FALSE && board.SquareAttacked(this.defs.SQUARES.E8, this.defs.COLOURS.WHITE) === this.defs.BOOL.FALSE){
                        this.AddQuietMove(board, this.MOVE(this.defs.SQUARES.E8, this.defs.SQUARES.C8, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, this.defs.MOVE_FLAG_CASTLE));
                    }
                }
            }
        }

        let index = this.defs.NonSlidingStartingIndex[board.side];
        let piece = this.defs.NonSlidingPieces[index++];
        while(piece !== 0){
            for(let pieceNum = 0 ; pieceNum < board.pieceNumber[piece] ; pieceNum++){
                let square = board.pieceList[this.defs.pieceIndex(piece, pieceNum)];
                for(let i = 0 ; i < this.defs.PieceToDirectionsLength[piece] ; i++){
                    let direction = this.defs.PieceToDirections[piece][i];
                    let target_square = square + direction;
                    if(this.defs.IsSquareOffBoard(board, target_square) === this.defs.BOOL.TRUE){
                        continue;
                    }
                    if(board.pieces[target_square] !== this.defs.PIECES.EMPTY){
                        if(this.defs.PieceCol[board.pieces[target_square]] !== board.side){
                            this.AddCaptureMove(board, this.MOVE(square, target_square, board.pieces[target_square], this.defs.PIECES.EMPTY, 0));
                        }
                    }
                    else{
                        this.AddQuietMove(board, this.MOVE(square, target_square, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, 0));
                    }
                }
            }
            piece = this.defs.NonSlidingPieces[index++];
        }

        index = this.defs.SlidingPiecesStartingIndex[board.side];
        piece = this.defs.SlidingPieces[index++];
        while(piece !== 0){
            for(let pieceNum = 0 ; pieceNum < board.pieceNumber[piece] ; pieceNum++){
                let square = board.pieceList[this.defs.pieceIndex(piece, pieceNum)];
                for(let i = 0 ; i < this.defs.PieceToDirectionsLength[piece] ; i++){
                    let direction = this.defs.PieceToDirections[piece][i];
                    let target_square = square + direction;
                    while(this.defs.IsSquareOffBoard(board, target_square) === this.defs.BOOL.FALSE){
                        if(board.pieces[target_square] !== this.defs.PIECES.EMPTY){
                            if(this.defs.PieceCol[board.pieces[target_square]] !== board.side){
                                this.AddCaptureMove(board, this.MOVE(square, target_square, board.pieces[target_square], this.defs.PIECES.EMPTY, 0));
                            }
                            break;
                        }
                        this.AddQuietMove(board, this.MOVE(square, target_square, this.defs.PIECES.EMPTY, this.defs.PIECES.EMPTY, 0));
                        target_square += direction;
                    }
                }
            }
            piece = this.defs.SlidingPieces[index++];
        }
    }
}