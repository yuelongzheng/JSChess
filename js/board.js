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
GameBoard.hisPly = 0;
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
/* 
    indexed by PIECES in defs.js
    Keeps track of the number of each piece on the board
*/
GameBoard.pieceNumber = new Array(13); 
/*
    Gets the squares every piece is located on
    There can be a maximum of 10 pieces (pawns promoting to knights/rooks/bishops)
    14 (instead of 13) is used to guarantee space for all pieces
*/
GameBoard.pieceList = new Array(14 * 10);
// position key represents the pieces on the board
GameBoard.posKey = 0;

// For AI
GameBoard.moveList = new Array(MAX_DEPTH * MAX_POSITION_MOVES);
GameBoard.moveScores = new Array(MAX_DEPTH * MAX_POSITION_MOVES);
GameBoard.moveListStart = new Array(MAX_DEPTH); 

function PrintBoard(){
    console.log("\nGame Board: \n");
    for(let rank = RANKS.RANK_8 ; rank >= RANKS.RANK_1 ; rank--){
        let line = (RankChar[rank] + " ");
        for(let file = FILES.FILE_A ; file <= FILES.FILE_H ; file++){
            let square = FileRankToSquare(file,rank);
            let piece = GameBoard.pieces[square];
            line += (" " + PieceChar[piece] + " ");
        }
        console.log(line);
    }
    let line = "  ";
    for(let file = FILES.FILE_A ; file <= FILES.FILE_H ; file++){
        line += (' ' + FileChar[file] + ' ');
    }

    console.log(line);
    console.log("side: " + SideChar[GameBoard.side]);
    console.log("enPassant: " + GameBoard.enPassant);
    line = "";

    if(GameBoard.castlePermission & CASTLE_BIT.WHITE_KING_SIDE_CASTLE){
        line += 'K';
    }
    if(GameBoard.castlePermission & CASTLE_BIT.WHITE_QUEEN_SIDE_CASTLE){
        line += 'Q';
    }
    if(GameBoard.castlePermission & CASTLE_BIT.BLACK_KING_SIDECASTLE){
        line += 'k';
    }
    if(GameBoard.castlePermission & CASTLE_BIT.BLACK_QUEEN_SIDE_CASTLE){
        line += 'q';
    }

    console.log("Castle Permission: " + line);
    console.log("key: " + GameBoard.posKey.toString(16));
}

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

function PrintPieceList() {
    for(let piece = PIECES.wP ; piece <= PIECES.bK ; piece++){
        for(let pieceNum = 0 ; pieceNum < GameBoard.pieceNumber[piece] ; pieceNum++){
            console.log('Piece ' + PieceChar[piece] + ' on ' + PrintSquare(GameBoard.pieceList[PieceIndex(piece, pieceNum)]));
        }
    }
}

function UpdateListsMaterial(){
    // Wipe arrays that need to be updated
    GameBoard.pieceList.fill(PIECES.EMPTY, 0, GameBoard.pieceList.length);
    GameBoard.material.fill(0, 0, GameBoard.material.length);
    GameBoard.pieceNumber.fill(0, 0, GameBoard.pieceNumber.length);

    for(let index = 0 ; index < ACTIVE_SQUARE_NUM ; index++){
        let square = square120(index);
        let piece = GameBoard.pieces[square];
        if(piece !== PIECES.EMPTY){
            let colour = PieceCol[piece];
            GameBoard.material[colour] += PieceVal[piece];
            GameBoard.pieceList[pieceIndex(piece, GameBoard.pieceNumber[piece])] = square;
            GameBoard.pieceNumber[piece]++;
        }
    }
    PrintPieceList();
}

function ResetBoard(){
    // Wipe board
    GameBoard.pieces.fill(SQUARES.OFFBOARD, 0, BOARD_SQUARE_NUM)
    /*  
        This overrides offboard squares with an empty piece
        GameBoard.pieces.fill(PIECES.EMPTY, square120(0), square120(64));
        Below only goes through the active squares
    */
    // Make the 64 active squares empty
    for(let index = 0 ; index < ACTIVE_SQUARE_NUM ; index++){
        GameBoard.pieces[square120(index)] = PIECES.EMPTY;
    }
    GameBoard.side = COLOURS.BOTH;
    GameBoard.enPassant = SQUARES.NO_SQUARE;
    GameBoard.fiftyMove = 0;
    GameBoard.ply = 0;
    GameBoard.hisPly = 0;
    GameBoard.castlePermission = 0;
    GameBoard.posKey = 0;
    GameBoard.moveListStart[GameBoard.ply] = 0;
}

/*
    Parses FEN Strings
    rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
    is the FEN string for the starting position

    FEN Strings contain 6 fields, each separated by spaces
        1. Piece Placement Data. 
            Black is lower case and white
        is upper case. The string goes rank 8 to rank 1, File a to file h
        2. Active colour, whose turn it is
        3. Castling permissions
        4. En Passant Target Square
        5. 50 move rule counter
        6. Full move counter, number of full moves. 
            It increments after black moves.
*/
function ParseFen(fen){
    ResetBoard();
    let rank = RANKS.RANK_8;
    let parts = fen.split(' ');
    let pieceData = parts[0];
    let activeColour = parts[1];
    let castlePerm = parts[2];
    let enPass = parts[3];
    pieceData.split('/').forEach(function(element) {
        let file = FILES.FILE_A;
        element.split('').forEach(function(letter) {
            let mnemonic= '-PNBRQKpnbrqk--12345678'.indexOf(letter);
            if(mnemonic === -1){
                console.log("FEN Error, Piece Data Error");
                return;
            }
            if (mnemonic < 14){
                // Puts piece at index. Refer to PIECES object in defs.js,
                GameBoard.pieces[FileRankToSquare(file++, rank)] = mnemonic;
            }
            else{
                // if a number n is encountered then increment file by n
                file += mnemonic - 14;
            }
        });
        rank--;
    });
    
    GameBoard.side = (activeColour == 'w') ? COLOURS.WHITE : COLOURS.BLACK;
    castlePerm.split('').forEach(function(letter) {
        let bit = "-KQkq".indexOf(letter);
        if(bit === -1){
            console.log(bit + " " + letter + " " + "FEN Error, Castle Permissions Error");
            return;
        }
        GameBoard.castlePermission |= bit;
    });
    if(enPass.length !== 1){
        let file = enPass.charAt(0).charCodeAt() - 'a'.charCodeAt();
        let rank = enPass.charAt(1).charCodeAt() - '1'.charCodeAt();
        console.log("File: " + file + " Rank: " + rank);
        GameBoard.enPassant = FileRankToSquare(file,rank);
    }
    GameBoard.posKey = GeneratePosKey();
    UpdateListsMaterial();
}
