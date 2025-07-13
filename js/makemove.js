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
    GameBoard.material[col] += PieceVal[piece];
    GameBoard.pieceList[pieceIndex(piece, GameBoard.pieceNumber[piece]++)] = square;
}

function MovePiece(from, to){
    let piece = GameBoard.pieces[from];
    HashPiece(piece, from);
    GameBoard.pieces[from] = PIECES.EMPTY;

    HashPiece(piece, to);
    GameBoard.pieces[to] = piece;

    for(let i = 0 ; i < GameBoard.pieceNumber[piece] ; i++){
        if(GameBoard.pieceList[pieceIndex(piece, i)] == from){
            GameBoard.pieceList[pieceIndex(piece, i)] = to;
            break;
        }
    }
}