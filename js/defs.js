export class Definitions{
    constructor(){
        this.PIECES = { EMPTY : 0, wP : 1, wN : 2, wB : 3, wR : 4, wQ : 5, wK : 6,
                bP : 7, bN : 8, bB : 9, bR : 10, bQ : 11, bK: 12};

        this.BOARD_SQUARE_NUM = 120;
        this.ACTIVE_SQUARE_NUM = 64; 

        this.FILES = {FILE_A : 0 , FILE_B : 1, FILE_C : 2, FILE_D : 3, 
            FILE_E : 4, FILE_F : 5, FILE_G : 6, FILE_H : 7, FILE_NONE : 8};

        this.RANKS = {RANK_1 : 0, RANK_2 : 1, RANK_3 : 2, RANK_4 : 3,
            RANK_5 : 4, RANK_6 : 5, RANK_7 : 6, RANK_8 : 7, RANK_NONE : 8};

        this.COLOURS = { WHITE : 0, BLACK : 1, BOTH : 2};

        this.CASTLE_BIT = { WHITE_KING_SIDE_CASTLE : 1, WHITE_QUEEN_SIDE_CASTLE : 2, 
            BLACK_KING_SIDE_CASTLE : 4, BLACK_QUEEN_SIDE_CASTLE : 8}

        this.SQUARES = {
            A1 : 21, B1 : 22, C1 : 23, D1 : 24, E1 : 25, F1 : 26, G1 : 27, H1: 28,
            A8 : 91, B8 : 92, C8 : 93, D8 : 94, E8 : 95, F8 : 96, G8 : 97, H8: 98,
            NO_SQUARE : 99, OFFBOARD : 100
        };

        this.BOOL = {FALSE : 0, TRUE : 1};

        this.MAX_GAME_MOVES = 2048;
        this.MAX_POSITION_MOVES = 256;
        this.MAX_DEPTH = 64; 
        // Needs to be a lot more than what the evaluation function can return
        this.INFINITE = 30000;
        this.MATE = 29000;

        // For a given index return the file
        this.FilesBoard = new Array(this.BOARD_SQUARE_NUM);
        // For a given index return the rank
        this.RanksBoard = new Array(this.BOARD_SQUARE_NUM);
        this.InitFilesRanksBoard();

        this.START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

        this.PieceChar = ".PNBRQKpnbrqk"
        this.SideChar = "wb-";
        this.RankChar = "12345678";
        this.FileChar = "abcdefgh";

        // Determines whether a piece is a big/major/minor piece
        this.PieceBig = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE ];
        this.PieceMaj = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE ];
        this.PieceMin = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE ];
        this.PieceVal= [ 0, 100, 325, 325, 550, 1000, 50000, 100, 325, 325, 550, 1000, 50000  ];
        this.PieceCol = [ this.COLOURS.BOTH, this.COLOURS.WHITE, this.COLOURS.WHITE, this.COLOURS.WHITE, this.COLOURS.WHITE, this.COLOURS.WHITE, this.COLOURS.WHITE,
            this.COLOURS.BLACK, this.COLOURS.BLACK, this.COLOURS.BLACK, this.COLOURS.BLACK, this.COLOURS.BLACK, this.COLOURS.BLACK ];

        // For the PIECES array return whether given index/piece is a pawn/knight/.../etc
        this.PiecePawn = [ this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE ];	
        this.PieceKnight = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE ];
        this.PieceKing = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE ];
        this.PieceRookQueen = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE ];
        this.PieceBishopQueen = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE ];
        // Rooks, bishops, queens are sliding pieces
        this.PieceSlides = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE ];

        this.KnightDirections = [ -8, -19, -21, -12, 8, 19, 21, 12];
        this.RookDirections = [-1, -10, 1, 10];
        this.BishopDirections = [-9, -11, 11, 9];
        this.KingDirections = [-1, -10, 1, 10, -9, -11, 11, 9];

        this.PieceToDirectionsLength = [0, 0, 8, 4, 4, 8, 8, 0, 8, 4, 4, 8, 8];
        this.PieceToDirections = [0, 0, this.KnightDirections, this.BishopDirections, this.RookDirections, this.KingDirections, this.KingDirections,
                                    0, this.KnightDirections, this.BishopDirections, this.RookDirections, this.KingDirections, this.KingDirections];
        this.NonSlidingPieces = [this.PIECES.wN, this.PIECES.wK, 0, this.PIECES.bN, this.PIECES.bK, 0];
        this.NonSlidingStartingIndex = [0, 3];
        this.SlidingPieces = [this.PIECES.wB, this.PIECES.wR, this.PIECES.wQ, 0, this.PIECES.bB, this.PIECES.bR, this.PIECES.bQ, 0];
        this.SlidingPiecesStartingIndex = [0, 4];
        
        /*
            120 squares and 14(13 really, more space???) possible pieces
            Allow for a unique index for each piece and each square
            Hash generated by 120 * Piece + square
        */
        this.PieceKeys = new Array(13 * 120);
        this.SideKey;
        // Castling requires 4 bits, which has a max value of 15
        this.CastleKeys = new Array(16);
        this.InitHashKeys();
        
        this.Square120ToSquare64 = new Array(this.BOARD_SQUARE_NUM);
        this.Square64ToSquare120 = new Array(this.ACTIVE_SQUARE_NUM);
        this.InitSquare120ToSquare64();

        this.Kings = [this.PIECES.wK, this.PIECES.bK];
        /*
            Array filled with 15s, except in indices corresponding to
            A1, E1, H1, A8, E8, H8. (Rook and king locations)
            Used to alter GameBoard.castlePermission
        */
        this.Castle_Permission_Array = [
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 13, 15, 15, 15, 12, 15, 15, 14, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15,  7, 15, 15, 15,  3, 15, 15, 11, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15, 15, 15
        ];

        /*
            Move information can be packed into 25 bits
            0 0000 0000 0000 0000 0000 0000

            Since the active square indices range from 21 to 98 7 bits are required, 
            which in hexadecimal comes out as 0x7F.

            The from square are stored by the 7 most right bits
            0 0000 0000 0000 0000 0111 1111
            The to square are stored by are stored in the 7 next bits
            0 0000 0000 0011 1111 1000 0000

            There are 12 total pieces that can be captured, this can be stored in the next 4 bits
            0 0000 0011 1100 0000 0000 0000 (14 zeroes behind the ones)

            The next bit stores whether a move is an en passant move
            0 0000 0100 0000 0000 0000 0000 - in hex this is 0x40000

            The next bit stores whether a move is a pawn starting move
            0 0000 1000 0000 0000 0000 0000 - in hex this is 0x80000

            The next bit stores pawn promotion details, requires 4 bits
            0 1111 0000 0000 0000 0000 0000 - in hex this is 0xF00000 (20 zeroes behind the ones)

            The next bit stores whether or not the move was a castling move
            1 0000 0000 0000 0000 0000 0000 - in hex this is 0x1000000
        
        */
        this.MOVE_FLAG_EN_PASSANT = 0x40000;
        this.MOVE_FLAG_PAWN_START = 0x80000;
        this.MOVE_FLAG_CASTLE = 0x1000000;

        this.MOVE_FLAG_CAPTURE = 0x7C000; // includes the en passant bit and move capture bits
        this.MOVE_FLAG_PROMOTION = 0xF00000;

        this.NO_MOVE = 0;
        this.ONE_RANK_MOVE = 10;
    }

    InitFilesRanksBoard(){
        this.FilesBoard.fill(this.SQUARES.OFFBOARD, 0, this.FilesBoard.length);
        this.RanksBoard.fill(this.SQUARES.OFFBOARD, 0, this.RanksBoard.length);
        let square;
        for(let rank = this.RANKS.RANK_1 ; rank <= this.RANKS.RANK_8 ; rank++){
            for(let file = this.FILES.FILE_A ; file <= this.FILES.FILE_H ; file++){
                square = this.FileRankToSquare(file, rank);
                this.FilesBoard[square] = file;
                this.RanksBoard[square] = rank;
            }
        }
    }

    /*
        Given a file and rank
        return the corresponding index in the board array (length 120)
    */
    FileRankToSquare(file ,rank) { 
        const starting_square = 21;
        const row_length = 10; // In the 120 array the row length is 10
        return ((starting_square + file) + (row_length * rank));
    }

    InitHashKeys(){
        // PieceKeys.fill(RAND_31(), 0, PieceKeys.length)
        // This is unacceptable becuase RAND_31 is called once only, instead of multiple times
        for(let index = 0 ; index < this.PieceKeys.length ; index++){
            this.PieceKeys[index] = this.RAND_31();
        }
        this.SideKey = this.RAND_31();
        for(let index = 0 ; index < this.CastleKeys.length ; index++){
            this.CastleKeys[index] = this.RAND_31();
        }
    }

    RAND_31(){
        return (Math.floor((Math.random()*255) + 1) << 23 | Math.floor((Math.random()*255) + 1) << 16 | 
                Math.floor((Math.random()*255) + 1) << 8 | Math.floor((Math.random()*255) + 1));
    }

    InitSquare120ToSquare64(){
        let square64 = 0;
        let outOfIndex64 = 64;
        let square;
        this.Square120ToSquare64.fill(outOfIndex64, 0, this.Square120ToSquare64.length);
        this.Square64ToSquare120.fill(this.BOARD_SQUARE_NUM, 0, this.Square64ToSquare120.length);
        for(let rank = this.RANKS.RANK_1 ; rank <= this.RANKS.RANK_8 ; rank++){
            for(let file = this.FILES.FILE_A ; file <= this.FILES.FILE_H ; file++){
                square = this.FileRankToSquare(file, rank);
                this.Square64ToSquare120[square64] = square;
                this.Square120ToSquare64[square] = square64++;
            }
        }
    }

    /*
        In - Integer 0 - 119
        Out - Integer 0 - 64
            0 - 63 : Actual board squares
            64 : Not a board square
    */
    square64(square120){
        return this.Square120ToSquare64[(square120)];
    }

    /*
        In - Integer 0 - 63
        Out - Integer 0 - 120
            0 - 119 : Actual board squares
            120 : Not a board square
    */
    square120(square64){
        return this.Square64ToSquare120[(square64)];
    }

    /*
        Used for pieceList
    */
    pieceIndex(piece, pieceNumber){
        return (piece * 10 + pieceNumber);
    }

    getFromSquare(move){
        return (move & 0x7F);
    }
    getToSquare(move){
        return ((move >> 7) & 0x7F);
    }
    getCapturedPiece(move){
        return ((move >> 14) & 0xF);
    }
    getPromotion(move){
        return ((move >> 20) & 0xF);
    }

    HashPiece(board, piece, square){
        board.posKey ^= this.PieceKeys[(piece * 120) + square];
    }

    HashCastle(board){
        board.posKey ^= this.CastleKeys[board.castlePermission];
    }

    HashSide(board){
        board.posKey ^= this.SideKey;
    }

    HashEnPassant(board){
        board.posKey ^= this.PieceKeys[board.enPassant];
    }
    
    IsSquareOffBoard(board, square){
        if(board.pieces[square] == this.SQUARES.OFFBOARD){
            return this.BOOL.TRUE;
        }
        return this.BOOL.FALSE;
    }

}