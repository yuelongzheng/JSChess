export class ManiupulatePiece{
    constructor(definitions){
        this.defs = definitions;
    }

    ClearPiece(board, square){
        let piece = board.pieces[square];
        let colour = this.defs.PieceCol[piece];
        let temp_pieceNum = -1;

        this.defs.HashPiece(board, piece , square);
        board.pieces[square] = this.defs.PIECES.EMPTY;
        board.material[colour] -= this.defs.PieceVal[piece];

        for(let i = 0 ; i < board.pieceNumber[piece] ; i++){
            if(board.pieceList[this.defs.pieceIndex(piece, i)] === square){
                temp_pieceNum = i;
                break;
            }
        }
        // Replace the cleared piece with the last piece in pieceList 
        board.pieceList[this.defs.pieceIndex(piece, temp_pieceNum)] = 
        board.pieceList[this.defs.pieceIndex(piece,--board.pieceNumber[piece])]
    }

    AddPiece(board, square, piece){
        let colour = this.defs.PieceCol[piece];
        this.defs.HashPiece(board, piece, square);
        board.pieces[square] = piece;
        board.material[colour] += this.defs.PieceVal[piece];
        board.pieceList[this.defs.pieceIndex(piece, board.pieceNumber[piece]++)] = square;
    }

    MovePiece(board, from, to){
        let piece = board.pieces[from];
        this.defs.HashPiece(board, piece, from);
        board.pieces[from] = this.defs.PIECES.EMPTY;

        this.defs.HashPiece(board, piece, to);
        board.pieces[to] = piece;

        for(let i = 0 ; i < board.pieceNumber[piece] ; i++){
            if(board.pieceList[this.defs.pieceIndex(piece, i)] === from){
                board.pieceList[this.defs.pieceIndex(piece, i)] = to;
                break;
            }
        }
    }

    MakeMove(board, move){
        let from = this.defs.getFromSquare(move);
        let to = this.defs.getToSquare(move);
        let side = board.side;

        board.history[board.hisPly].posKey = board.posKey;
        if((move & this.defs.MOVE_FLAG_EN_PASSANT) !== 0){
            // Capture the piece one rank behind the piece if en passant occurs
            if(side === this.defs.COLOURS.WHITE){
                this.ClearPiece(board, to - this.defs.ONE_RANK_MOVE);
            }
            else{
                this.ClearPiece(board, to + this.defs.ONE_RANK_MOVE);
            }
        }
        else if((move & this.defs.MOVE_FLAG_CASTLE) != 0){
            // move rook if castling occurs
            switch(to) {
                case this.defs.SQUARES.C1:
                    this.MovePiece(board, this.defs.SQUARES.A1, this.defs.SQUARES.D1);
                    break;
                case this.defs.SQUARES.C8:
                    this.MovePiece(board, this.defs.SQUARES.A8, this.defs.SQUARES.D8);
                    break;
                case this.defs.SQUARES.G1:
                    this.MovePiece(board, this.defs.SQUARES.H1, this.defs.SQUARES.F1);
                    break;
                case this.defs.SQUARES.G8:
                    this.MovePiece(board, this.defs.SQUARES.H8, this.defs.SQUARES.F8);
                    break;
                default:
                    console.error("Make Move : Non-valid castling move made");
                    break;
            }
        }

        if(board.enPassant !== this.defs.SQUARES.NO_SQUARE){
            this.defs.HashEnPassant(board);
        }
        this.defs.HashCastle(board);
        board.history[board.hisPly].move = move;
        board.history[board.hisPly].fiftyMove = board.fiftyMove;
        board.history[board.hisPly].enPassant = board.enPassant;
        board.history[board.hisPly].castlePermission = board.castlePermission;

        board.castlePermission &= this.defs.Castle_Permission_Array[from];
        board.castlePermission &= this.defs.Castle_Permission_Array[to];
        board.enPassant = this.defs.SQUARES.NO_SQUARE;
        this.defs.HashCastle(board);

        let captured = this.defs.getCapturedPiece(move);
        board.fiftyMove++;
        if(captured != this.defs.PIECES.EMPTY){
            this.ClearPiece(board, to);
            board.fiftyMove = 0;
        }
        board.hisPly++;
        board.ply++;

        if(this.defs.PiecePawn[board.pieces[from]] === this.defs.BOOL.TRUE){
            board.fiftyMove = 0;
            if( (move & this.defs.MOVE_FLAG_PAWN_START) != 0){
                if(side === this.defs.COLOURS.WHITE){
                    board.enPassant = from + this.defs.ONE_RANK_MOVE;
                }
                else{
                    board.enPassant = from - this.defs.ONE_RANK_MOVE;
                }
                this.defs.HashEnPassant(board);
            }
        }

        this.MovePiece(board, from, to);
        let promoted_piece = this.defs.getPromotion(move);
        if(promoted_piece != this.defs.PIECES.EMPTY){
            this.ClearPiece(board, to);
            this.AddPiece(board, to, promoted_piece);
        }

        board.side ^= 1;
        this.defs.HashSide(board);

        // Check if king is in check
        if(board.SquareAttacked(board.pieceList[this.defs.pieceIndex(this.defs.Kings[side], 0)], board.side)){
            this.UndoMove(board);
            return this.defs.BOOL.FALSE;
        }
        return this.defs.BOOL.TRUE;


    }

    // Reverse Move
    UndoMove(board){
        board.hisPly--;
        board.ply--;

        let previous = board.history[board.hisPly];
        let move = previous.move;
        let from = this.defs.getFromSquare(move);
        let to = this.defs.getToSquare(move);

        if(board.enPassant !== this.defs.SQUARES.NO_SQUARE){
            this.defs.HashEnPassant(board);
        }
        this.defs.HashCastle(board);

        board.castlePermission = previous.castlePermission;
        board.fiftyMove = previous.fiftyMove;
        board.enPassant = previous.enPassant;

        if(board.enPassant !== this.defs.SQUARES.NO_SQUARE){
            this.defs.HashEnPassant(board);
        }
        this.defs.HashCastle(board);

        board.side ^= 1;
        this.defs.HashSide(board);

        if( (this.defs.MOVE_FLAG_EN_PASSANT & move) !== 0){
            if(board.side === this.defs.COLOURS.WHITE){
                this.AddPiece(board, to - this.defs.ONE_RANK_MOVE, this.defs.PIECES.bP);
            }
            else{
                this.AddPiece(board, to + this.defs.ONE_RANK_MOVE, this.defs.PIECES.wP);
            }
        }
        else if((move & this.defs.MOVE_FLAG_CASTLE) != 0){
            switch(to) {
                case this.defs.SQUARES.C1:
                    this.MovePiece(board, this.defs.SQUARES.D1, this.defs.SQUARES.A1);
                    break;
                case this.defs.SQUARES.C8:
                    this.MovePiece(board, this.defs.SQUARES.D8, this.defs.SQUARES.A8);
                    break;
                case this.defs.SQUARES.G1:
                    this.MovePiece(board, this.defs.SQUARES.F1, this.defs.SQUARES.H1);
                    break;
                case this.defs.SQUARES.G8:
                    this.MovePiece(board, this.defs.SQUARES.F8, this.defs.SQUARES.H8);
                    break;
                default:
                    console.error("Undo Move : Non-valid castling move made");
                    break;
            }
        }

        this.MovePiece(board, to, from);
        let captured = this.defs.getCapturedPiece(move);
        if(captured !== this.defs.PIECES.EMPTY){
            this.AddPiece(board, to, captured);
        }

        let promoted_piece = this.defs.getPromotion(move);
        if(promoted_piece !== this.defs.PIECES.EMPTY){
            this.ClearPiece(board, from);
            this.AddPiece(board, from, 
                (this.defs.PieceCol[promoted_piece] === this.defs.COLOURS.WHITE 
                    ? this.defs.PIECES.wP : this.defs.PIECES.bP));
        }
    }
}
