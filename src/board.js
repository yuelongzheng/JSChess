const { MAX_DEPTH, 
        MAX_POSITION_MOVES, 
        PIECES,
        BOOL, 
        ACTIVE_SQUARE_NUM, 
        square120, 
        PieceCol, 
        COLOURS, 
        RANKS, 
        FILES, 
        FileRankToSquare, 
        FileChar, 
        SideChar,
        CASTLE_BIT, 
        PieceKeys, 
        pieceIndex, 
        SQUARES, 
        PieceKnight, 
        RookDirections,
        PieceRookQueen, 
        BishopDirections, 
        PieceBishopQueen,
        KingDirections, 
        PieceKing, 
        KnightDirections,
        BOARD_SQUARE_NUM, 
        MAX_GAME_MOVES, 
        NO_MOVE,
        SideKey, 
        CastleKeys, 
        PieceVal,
        PieceChar, 
        RankChar, 
        PV_ENTRIES} = require("./defs");

const { PrintSquare } = require("./io");

const GameBoard = {};

GameBoard.pieces = new Array(BOARD_SQUARE_NUM);
GameBoard.side = COLOURS.WHITE;
// Draw can be claimed if no captures or no pawn has been moved in fifty moves
GameBoard.fiftyMove = 0;
// A ply is one turn take by a player, keep a count of every ply
GameBoard.hisPly = 0;
GameBoard.history = [];
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

GameBoard.pvTable = [];
GameBoard.pvArray = new Array(MAX_DEPTH);
GameBoard.searchHistory = new Array(14 * BOARD_SQUARE_NUM);
GameBoard.searchKillers = new Array(3 * MAX_DEPTH);

InitBoardVariables();

function CheckBoard(){
    let temp_pieceNum = new Array(GameBoard.pieceNumber.length);
    for(let i = 0 ; i < GameBoard.pieceNumber.length ; i++){
        temp_pieceNum[i] = 0;
    }
    let temp_material = new Array(GameBoard.material.length);
    for(let i = 0 ; i < GameBoard.material.length ; i++){
        temp_material[i] = 0;
    }

    let square;
    let temp_piece;
    for(temp_piece = PIECES.wP ; temp_piece <= PIECES.bK ; temp_piece++){
        for(let piece_num = 0 ; piece_num < GameBoard.pieceNumber[temp_piece] ; piece_num++){
            square = GameBoard.pieceList[pieceIndex(temp_piece, piece_num)];
            if(GameBoard.pieces[square] != temp_piece){
                console.error("Error GameBoard.pieces and GameBoard.pieceList do not match");
                return BOOL.FALSE;
            }
        }
    }

    for(let i = 0 ; i < ACTIVE_SQUARE_NUM ; i++){
        square = square120(i);
        temp_piece = GameBoard.pieces[square];
        temp_pieceNum[temp_piece]++;
        temp_material[PieceCol[temp_piece]] += PieceVal[temp_piece];
    }

    for(temp_piece = PIECES.wP; temp_piece <= PIECES.bK ; temp_piece++){
        if(temp_pieceNum[temp_piece] !== GameBoard.pieceNumber[temp_piece]){
            console.error("Error GameBoard.pieceNumber");
            return BOOL.FALSE;
        }
    }

    if(temp_material[COLOURS.WHITE] !== GameBoard.material[COLOURS.WHITE] ||
        temp_material[COLOURS.BLACK] !== GameBoard.material[COLOURS.BLACK]
    ){
        console.error("Error GameBoard.material");
        return BOOL.FALSE;
    }

    if(GameBoard.side !== COLOURS.WHITE && GameBoard.side !== COLOURS.BLACK){
        console.error("Error GameBoard.side");
        return BOOL.FALSE;
    }

    if(GeneratePosKey() !== GameBoard.posKey){
        console.log("Error GameBoard.posKey");
        return BOOL.FALSE;
    }
    return BOOL.TRUE;
}

function PrintBoard(){
    let square, piece, line;
    console.log("\nGame Board: \n");
    for(let rank = RANKS.RANK_8 ; rank >= RANKS.RANK_1 ; rank--){
        line = (RankChar[rank] + " ");
        for(let file = FILES.FILE_A ; file <= FILES.FILE_H ; file++){
            square = FileRankToSquare(file,rank);
            piece = GameBoard.pieces[square];
            line += (" " + PieceChar[piece] + " ");
        }
        console.log(line);
    }
    line = "  ";
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
    if(GameBoard.castlePermission & CASTLE_BIT.BLACK_KING_SIDE_CASTLE){
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
    let piece;
    for(let square = 0 ; square < BOARD_SQUARE_NUM ; square++){
        piece = GameBoard.pieces[square]
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
            console.log('Piece ' + PieceChar[piece] + ' on ' + PrintSquare(GameBoard.pieceList[pieceIndex(piece, pieceNum)]));
        }
    }
}

function UpdateListsMaterial(){
    // Wipe arrays that need to be updated
    GameBoard.pieceList.fill(PIECES.EMPTY, 0, GameBoard.pieceList.length);
    GameBoard.material.fill(0, 0, GameBoard.material.length);
    GameBoard.pieceNumber.fill(0, 0, GameBoard.pieceNumber.length);

    let square, piece, colour;
    for(let index = 0 ; index < ACTIVE_SQUARE_NUM ; index++){
        square = square120(index);
        piece = GameBoard.pieces[square];
        if(piece !== PIECES.EMPTY){
            colour = PieceCol[piece];
            GameBoard.material[colour] += PieceVal[piece];
            GameBoard.pieceList[pieceIndex(piece, GameBoard.pieceNumber[piece])] = square;
            GameBoard.pieceNumber[piece]++;
        }
    }
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
    let file;
    let mnemonic;
    pieceData.split('/').forEach(function(element) {
        file = FILES.FILE_A;
        element.split('').forEach(function(letter) {
            mnemonic= '-PNBRQKpnbrqk--12345678'.indexOf(letter);
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
    let bit;
    castlePerm.split('').forEach(function(letter) {
        bit = "-KQkq".indexOf(letter);
        if(bit === -1){
            console.log(bit + " " + letter + " " + "FEN Error, Castle Permissions Error");
            return;
        }
        else if(bit !== 0){
            GameBoard.castlePermission |= (1 << (bit - 1));
        }
        
    });
    if(enPass.length !== 1){
        file = enPass.charAt(0).charCodeAt() - 'a'.charCodeAt();
        rank = enPass.charAt(1).charCodeAt() - '1'.charCodeAt();
        console.log("File: " + file + " Rank: " + rank);
        GameBoard.enPassant = FileRankToSquare(file,rank);
    }
    GameBoard.posKey = GeneratePosKey();
    UpdateListsMaterial();
}

/*
    Checks if a square is attacked by a side/colour
*/
function SquareAttacked(square, side){
    // Check if square is attacked by pawns
    if(side === COLOURS.WHITE){
        if(GameBoard.pieces[square - 11] === PIECES.wP || GameBoard.pieces[square - 9] === PIECES.wP){
            return BOOL.TRUE;
        }
    }
    else{
        if(GameBoard.pieces[square + 11] === PIECES.bP || GameBoard.pieces[square + 9] === PIECES.bP){
            return BOOL.TRUE;
        }
    }
    
    // Check if square is attacked by knights
    for(let i = 0 ; i < KnightDirections.length ; i++){
        let piece = GameBoard.pieces[square + KnightDirections[i]];
        if(piece !== SQUARES.OFFBOARD && PieceCol[piece] === side && PieceKnight[piece] === BOOL.TRUE){
            return BOOL.TRUE;
        }
    }

    // Check if square is attacked horizontally/vertically by a sliding piece
    for(let i = 0 ; i < RookDirections.length ; i++){
        let direction = RookDirections[i];
        let currentSquare = square + direction;
        let piece = GameBoard.pieces[currentSquare];
        while(piece !== SQUARES.OFFBOARD){
            if(piece !== PIECES.EMPTY){
                if(PieceRookQueen[piece] === BOOL.TRUE && PieceCol[piece] == side){
                    return BOOL.TRUE;
                }
                break;
            }
            currentSquare += direction;
            piece = GameBoard.pieces[currentSquare];
        }
    }

    // Check if square is attacked diagonally by a sliding piece
    for(let i = 0 ; i < BishopDirections.length ; i++){
        let direction = BishopDirections[i];
        let currentSquare = square + direction;
        let piece = GameBoard.pieces[currentSquare];
        while(piece !== SQUARES.OFFBOARD){
            if(piece !== PIECES.EMPTY){
                if(PieceBishopQueen[piece] === BOOL.TRUE && PieceCol[piece] == side){
                    return BOOL.TRUE;
                }
                break;
            }
            currentSquare += direction;
            piece = GameBoard.pieces[currentSquare];
        }
    }

    // Check if square is attacked by a king
    for(let i = 0 ; i < KingDirections.length ; i++){
        let piece = GameBoard.pieces[square + KingDirections[i]];
        if(piece !== SQUARES.OFFBOARD && PieceCol[piece] === side && PieceKing[piece] === BOOL.TRUE){
            return BOOL.TRUE;
        }
    }

    return BOOL.FALSE;
}


function PrintSquareAttacked(){
    let piece;
    console.log("\nAttacked:\n");
    for(let rank = RANKS.RANK_8 ; rank >= RANKS.RANK_1 ; rank--){
        let line = ((rank + 1) + " ");
        for(let file = FILES.FILE_A ; file <= FILES.FILE_H ; file++){
            let square = FileRankToSquare(file, rank);
            if(SquareAttacked(square, GameBoard.side) === BOOL.TRUE){
                piece = "X";
            }
            else{
                piece = "-";
            }
            line += (" " + piece + " ");
        }
        console.log(line);
    }
    console.log("\n");
}

function InitBoardVariables(){
    for(let i = 0 ; i < MAX_GAME_MOVES ; i++){
        GameBoard.history.push({
            move : NO_MOVE,
            castlePermission : 0,
            enPassant : 0,
            fiftyMove : 0,
            posKey : 0
        });
    }

    for(let i = 0 ; i < PV_ENTRIES ; i++){
        GameBoard.pvTable.push({
            move : NO_MOVE,
            posKey : 0
        });
    }
}

function IsSquareOffBoard(square){
    if(GameBoard.pieces[square] === SQUARES.OFFBOARD){
        return BOOL.TRUE;
    }
    return BOOL.FALSE;
}

function HashPiece(piece, square){
    GameBoard.posKey ^= PieceKeys[(piece * 120) + square];
}

function HashCastle(){
    GameBoard.posKey ^= CastleKeys[GameBoard.castlePermission];
}

function HashSide(){
    GameBoard.posKey ^= SideKey;
}

function HashEnPassant(){
    GameBoard.posKey ^= PieceKeys[GameBoard.enPassant];
}

module.exports = {
    GameBoard,
    CheckBoard,
    PrintBoard,
    ParseFen,
    IsSquareOffBoard,
    HashPiece,
    HashCastle,
    HashSide,
    HashEnPassant,
    SquareAttacked
}