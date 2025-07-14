function ClearPiece(square){
    let piece = GameBoard.pieces[square];
    let colour = PieceCol[piece];
    let temp_pieceNum = -1;

    HashPiece(piece , square);
    GameBoard.pieces[square] = PIECES.EMPTY;
    GameBoard.material[colour] -= PieceVal[piece];

    for(let i = 0 ; i < GameBoard.pieceNumber[piece] ; i++){
        if(GameBoard.pieceList[pieceIndex(piece, i)] === square){
            temp_pieceNum = index;
            break;
        }
    }
    // Replace the cleared piece with the last piece in pieceList 
    GameBoard.pieceList[pieceIndex(piece, temp_pieceNum)] = GameBoard.pieceList[pieceIndex(piece,--GameBoard.pieceNumber[piece])]
}

function AddPiece(square, piece){
    let colour = PieceCol[piece];
    HashPiece(piece, square);
    GameBoard.pieces[square] = piece;
    GameBoard.material[colour] += PieceVal[piece];
    GameBoard.pieceList[pieceIndex(piece, GameBoard.pieceNumber[piece]++)] = square;
}

function MovePiece(from, to){
    let piece = GameBoard.pieces[from];
    HashPiece(piece, from);
    GameBoard.pieces[from] = PIECES.EMPTY;

    HashPiece(piece, to);
    GameBoard.pieces[to] = piece;

    for(let i = 0 ; i < GameBoard.pieceNumber[piece] ; i++){
        if(GameBoard.pieceList[pieceIndex(piece, i)] === from){
            GameBoard.pieceList[pieceIndex(piece, i)] = to;
            break;
        }
    }
}

function MakeMove(move){
    let from = getFromSquare(move);
    let to = getToSquare(move);
    let side = GameBoard.side;

    GameBoard.history[GameBoard.hisPly].posKey = GameBoard.posKey;
    if((move & MOVE_FLAG_EN_PASSANT) !== 0){
        // Capture the piece one rank behind the piece if en passant occurs
        if(side === COLOURS.WHITE){
            ClearPiece(to - ONE_RANK_MOVE);
        }
        else{
            ClearPiece(to + ONE_RANK_MOVE);
        }
    }
    else if((move & MOVE_FLAG_CASTLE) != 0){
        // move rook if castling occurs
        switch(to) {
            case SQUARES.C1:
                MovePiece(SQUARES.A1, SQUARES.D1);
                break;
            case SQUARES.C8:
                MovePiece(SQUARES.A8, SQUARES.D8);
                break;
            case SQUARES.G1:
                MovePiece(SQUARES.H1, SQUARES.F1);
                break;
            case SQUARES.G1:
                MovePiece(SQUARES.H8, SQUARES.F8);
                break;
            default:
                console.error("Non-valid castling move made");
                break;
        }
    }

    if(GameBoard.enPassant != SQUARES.NO_SQUARE){
        HashEnPassant();
    }
    HashCastle();
    GameBoard.history[GameBoard.hisPly].move = move;
    GameBoard.history[GameBoard.hisPly].fiftyMove = GameBoard.fiftyMove;
    GameBoard.history[GameBoard.hisPly].enPassant = GameBoard.enPassant;
    GameBoard.history[GameBoard.hisPly].castlePermission = GameBoard.castlePermission;

    GameBoard.castlePermission &= Castle_Permission_Array[from];
    GameBoard.castlePermission &= Castle_Permission_Array[to];
    GameBoard.enPassant = SQUARES.NO_SQUARE;
    HashCastle();

    let captured = getCapturedPiece(move);
    GameBoard.fiftyMove++;
    if(captured != PIECES.EMPTY){
        ClearPiece(to);
        GameBoard.fiftyMove = 0;
    }
    GameBoard.hisPly++;
    GameBoard.ply++;

    if(PiecePawn[GameBoard.pieces[from]] === BOOL.TRUE){
        GameBoard.fiftyMove = 0;
        if( (move & MOVE_FLAG_PAWN_START) != 0){
            if(side === COLOURS.WHITE){
                GameBoard.enPassant = from + ONE_RANK_MOVE;
            }
            else{
                GameBoard.enPassant = from - ONE_RANK_MOVE;
            }
            HashEnPassant();
        }
    }

    MovePiece(from, to);
    let promoted_piece = getPromotion(move);
    if(promoted_piece != PIECES.EMPTY){
        ClearPiece(to);
        AddPiece(to, promoted_piece);
    }

    GameBoard.side ^= 1;
    HashSide();

    // Check if king is in check
    if(SquareAttacked(GameBoard.pieceList[pieceIndex(Kings[side], 0)], GameBoard.side)){
        // TakeMove();
        return BOOL.FALSE;
    }
    return BOOL.TRUE;


}