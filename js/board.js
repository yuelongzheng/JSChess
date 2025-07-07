// Generates index of a piece
function PieceIndex(piece, pieceNumber) { 
    return (piece * 10 + pieceNumber);
}

let GameBoard = {};

GameBoard.pieces = new Array(BOARD_SQUARE_NUM);
GameBoard.side = COLOURS.WHITE;
// Draw can be claimed if no captures or no pawn has been moved in fifty moves
GameBoard.fiftyMove = 0;
// A ply is one turn take by a player, keep a count of every ply
GameBoard.hisPlay = 0;
// Number of plys made in the search tree 
GameBoard.ply = 0;
/*
    En passant occurs when a pawn moves two squares forward form its starting square
    and ends next to an opposing pawn.
    The opposing pawn can then capture the pawn.
*/
GameBoard.enPassant = 0;
// Use 4 bits to determine whether or not castling is permissible, 
// on king side or queen side. For both sides
GameBoard.castlePermission = 0;
// Holds the value of material of each side in a given position
GameBoard.material = new Array(2); 
// indexed by PIECES in defs.js
GameBoard.pieceNumber = new Array(13); 
/*
    Gets the squares every piece is located in
    There can be a maximum of 10 pieces (pawns promoting to knights/rooks/bishops)
    14 (instead of 13) is used to guarantee space for all pieces
*/
GameBoard.pieceList = new Array(14 * 10);
// position key represents the pieces on the board
GameBoard.posKey = 0;

function GeneratePosKey(){
    let finalKey = 0;
    for(let square = 0 ; square < BOARD_SQUARE_NUM ; square++){
        let piece = GameBoard.pieces[square]
        if(piece != PIECES.EMPTY && piece != SQUARES.OFFBOARD){
            finalKey ^= PieceKeys[(piece * 120) + square];
        }
    }
    if(GameBoard.side == COLOURS.WHITE){
        finalKey ^= SideKey;
    }
    if(GameBoard.enPassant != SQUARES.NO_SQUARE){
        finalKey ^= PieceKeys[GameBoard.enPassant];
    }
    finalKey ^= CastleKeys[GameBoard.castlePermission];
    return finalKey;
}

