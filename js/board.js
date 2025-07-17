export class GameBoard{
    constructor(defitnitions, inOut){
        this.defs = defitnitions;
        this.io = inOut;
        this.pieces = new Array(this.defs.BOARD_SQUARE_NUM);
        this.side = this.defs.COLOURS.WHITE;
        // Draw can be claimed if no captures or no pawn has been moved in fifty moves
        this.fiftyMove = 0;
        // A ply is one turn take by a player, keep a count of every ply
        this.hisPly = 0;
        this.history = [];
        this.InitHistory();
        // Number of plys made in the search tree 
        this.ply = 0;
        /*
            En passant occurs when a pawn moves two squares forward form its starting square
            and ends next to an opposing pawn.
            The opposing pawn can then capture the pawn.
        */
        this.enPassant = 0;
        // Use 4 bits to determine whether or not castling is permissible, 
        // on king side or queen side. For both sides
        this.castlePermission = 0;
        // Holds the value of material of each side in a given position
        this.material = new Array(2); 
        /* 
            indexed by PIECES in defs.js
            Keeps track of the number of each piece on the board
        */
        this.pieceNumber = new Array(13); 
        /*
            Gets the squares every piece is located on
            There can be a maximum of 10 pieces (pawns promoting to knights/rooks/bishops)
            14 (instead of 13) is used to guarantee space for all pieces
        */
        this.pieceList = new Array(14 * 10);
        // position key represents the pieces on the board
        this.posKey = 0;

        // For AI
        this.moveList = new Array(this.defs.MAX_DEPTH * this.defs.MAX_POSITION_MOVES);
        this.moveScores = new Array(this.defs.MAX_DEPTH * this.defs.MAX_POSITION_MOVES);
        this.moveListStart = new Array(this.defs.MAX_DEPTH); 
    }

    InitHistory(){
    for(let i = 0 ; i < this.defs.MAX_GAME_MOVES ; i++){
        this.history.push({
            move : this.defs.NO_MOVE,
            castlePermission : 0,
            enPassant : 0,
            fiftyMove : 0,
            posKey : 0
        });
    }
}

    CheckBoard(){
        let temp_pieceNum = new Array(this.pieceNumber.length);
        for(let i = 0 ; i < this.pieceNumber.length ; i++){
            temp_pieceNum[i] = 0;
        }
        let temp_material = new Array(this.material.length);
        for(let i = 0 ; i < this.material.length ; i++){
            temp_material[i] = 0;
        }

        let square;
        let temp_piece;
        for(temp_piece = this.defs.PIECES.wP ; temp_piece <= this.defs.PIECES.bK ; temp_piece++){
            for(let piece_num = 0 ; piece_num < this.pieceNumber[temp_piece] ; piece_num++){
                square = this.pieceList[this.defs.pieceIndex(temp_piece, piece_num)];
                if(this.pieces[square] != temp_piece){
                    console.error("Error this.pieces and this.pieceList do not match");
                    return this.defs.BOOL.FALSE;
                }
            }
        }

        for(let i = 0 ; i < this.defs.ACTIVE_SQUARE_NUM ; i++){
            square = this.defs.square120(i);
            temp_piece = this.pieces[square];
            temp_pieceNum[temp_piece]++;
            temp_material[this.defs.PieceCol[temp_piece]] += this.defs.PieceVal[temp_piece];
        }

        for(temp_piece = this.defs.PIECES.wP; temp_piece <= this.defsPIECES.bK ; temp_piece++){
            if(temp_pieceNum[temp_piece] !== this.pieceNumber[temp_piece]){
                console.error("Error this.pieceNumber");
                return this.defs.BOOL.FALSE;
            }
        }

        if(temp_material[this.defs.COLOURS.WHITE] !== this.material[this.defs.COLOURS.WHITE] ||
            temp_material[this.defs.COLOURS.BLACK] !== this.material[this.defs.COLOURS.BLACK]
        ){
            console.error("Error this.material");
            return this.defs.BOOL.FALSE;
        }

        if(this.side !== this.defs.COLOURS.WHITE && this.side !== this.defs.COLOURS.BLACK){
            console.error("Error this.side");
            return this.defs.BOOL.FALSE;
        }

        if(this.GeneratePosKey() !== this.posKey){
            console.log("Error this.posKey");
            return this.defs.BOOL.FALSE;
        }
        return this.defs.BOOL.TRUE;
    }

    PrintBoard(){
        let square, piece, line;
        console.log("\nGame Board: \n");
        for(let rank = this.defs.RANKS.RANK_8 ; rank >= this.defs.RANKS.RANK_1 ; rank--){
            line = (this.defs.RankChar[rank] + " ");
            for(let file = this.defs.FILES.FILE_A ; file <= this.defs.FILES.FILE_H ; file++){
                square = this.defs.FileRankToSquare(file,rank);
                piece = this.pieces[square];
                line += (" " + this.defs.PieceChar[piece] + " ");
            }
            console.log(line);
        }
        line = "  ";
        for(let file = this.defs.FILES.FILE_A ; file <= this.defs.FILES.FILE_H ; file++){
            line += (' ' + this.defs.FileChar[file] + ' ');
        }

        console.log(line);
        console.log("side: " + this.defs.SideChar[this.side]);
        console.log("enPassant: " + this.enPassant);
        line = "";

        if(this.castlePermission & this.defs.CASTLE_BIT.WHITE_KING_SIDE_CASTLE){
            line += 'K';
        }
        if(this.castlePermission & this.defs.CASTLE_BIT.WHITE_QUEEN_SIDE_CASTLE){
            line += 'Q';
        }
        if(this.castlePermission & this.defs.CASTLE_BIT.BLACK_KING_SIDE_CASTLE){
            line += 'k';
        }
        if(this.castlePermission & this.defs.CASTLE_BIT.BLACK_QUEEN_SIDE_CASTLE){
            line += 'q';
        }

        console.log("Castle Permission: " + line);
        console.log("key: " + this.posKey.toString(16));
    }

    GeneratePosKey(){
        let finalKey = 0;
        let piece;
        for(let square = 0 ; square < this.defs.BOARD_SQUARE_NUM ; square++){
            piece = this.pieces[square]
            if(piece != this.defs.PIECES.EMPTY && piece != this.defs.SQUARES.OFFBOARD){
                finalKey ^= this.defs.PieceKeys[(piece * 120) + square];
            }
        }
        if(this.side == this.defs.COLOURS.WHITE){
            finalKey ^= this.defs.SideKey;
        }
        if(this.enPassant != this.defs.SQUARES.NO_SQUARE){
            finalKey ^= this.defs.PieceKeys[this.enPassant];
        }
        finalKey ^= this.defs.CastleKeys[this.castlePermission];
        return finalKey;
    }

    PrintPieceList() {
        for(let piece = this.defs.PIECES.wP ; piece <= this.defs.PIECES.bK ; piece++){
            for(let pieceNum = 0 ; pieceNum < this.pieceNumber[piece] ; pieceNum++){
                console.log('Piece ' + this.defs.PieceChar[piece] + ' on ' + this.io.PrintSquare(this.pieceList[this.defs.pieceIndex(piece, pieceNum)]));
            }
        }
    }

    UpdateListsMaterial(){
        // Wipe arrays that need to be updated
        this.pieceList.fill(this.defs.PIECES.EMPTY, 0, this.pieceList.length);
        this.material.fill(0, 0, this.material.length);
        this.pieceNumber.fill(0, 0, this.pieceNumber.length);

        let square, piece, colour;
        for(let index = 0 ; index < this.defs.ACTIVE_SQUARE_NUM ; index++){
            square = this.defs.square120(index);
            piece = this.pieces[square];
            if(piece !== this.defs.PIECES.EMPTY){
                colour = this.defs.PieceCol[piece];
                this.material[colour] += this.defs.PieceVal[piece];
                this.pieceList[this.defs.pieceIndex(piece, this.pieceNumber[piece])] = square;
                this.pieceNumber[piece]++;
            }
        }
        this.PrintPieceList();
    }

    ResetBoard(){
        // Wipe board
        this.pieces.fill(this.defs.SQUARES.OFFBOARD, 0, this.defs.BOARD_SQUARE_NUM)
        /*  
            This overrides offboard squares with an empty piece
            this.pieces.fill(PIECES.EMPTY, square120(0), square120(64));
            Below only goes through the active squares
        */
        // Make the 64 active squares empty
        for(let index = 0 ; index < this.defs.ACTIVE_SQUARE_NUM ; index++){
            this.pieces[this.defs.square120(index)] = this.defs.PIECES.EMPTY;
        }
        this.side = this.defs.COLOURS.BOTH;
        this.enPassant = this.defs.SQUARES.NO_SQUARE;
        this.fiftyMove = 0;
        this.ply = 0;
        this.hisPly = 0;
        this.castlePermission = 0;
        this.posKey = 0;
        this.moveListStart[this.ply] = 0;
    }

    ParseFen(fen){
        this.ResetBoard();
        let rank = this.defs.RANKS.RANK_8;
        let parts = fen.split(' ');
        let pieceData = parts[0];
        let activeColour = parts[1];
        let castlePerm = parts[2];
        let enPass = parts[3];
        let file;
        let mnemonic;
        pieceData.split('/').forEach(function(element) {
            file = this.defs.FILES.FILE_A;
            element.split('').forEach(function(letter) {
                mnemonic= '-PNBRQKpnbrqk--12345678'.indexOf(letter);
                if(mnemonic === -1){
                    console.log("FEN Error, Piece Data Error");
                    return;
                }
                if (mnemonic < 14){
                    // Puts piece at index. Refer to PIECES object in defs.js,
                    this.pieces[this.defs.FileRankToSquare(file++, rank)] = mnemonic;
                }
                else{
                    // if a number n is encountered then increment file by n
                    file += mnemonic - 14;
                }
            }, this);
            rank--;
        }, this);
        
        this.side = (activeColour == 'w') ? this.defs.COLOURS.WHITE : this.defs.COLOURS.BLACK;
        let bit;
        castlePerm.split('').forEach(function(letter) {
            bit = "KQkq".indexOf(letter);
            if(bit === -1){
                console.log(bit + " " + letter + " " + "FEN Error, Castle Permissions Error");
                return;
            }
            this.castlePermission |= (1 << bit);
        }, this);
        if(enPass.length !== 1){
            file = enPass.charAt(0).charCodeAt() - 'a'.charCodeAt();
            rank = enPass.charAt(1).charCodeAt() - '1'.charCodeAt();
            console.log("File: " + file + " Rank: " + rank);
            this.enPassant = this.defs.FileRankToSquare(file,rank);
        }
        this.posKey = this.GeneratePosKey();
        this.UpdateListsMaterial();
        this.PrintSquareAttacked();
    }

    /*
        Checks if a square is attacked by a side/colour
    */
    SquareAttacked(square, side){
        // Check if square is attacked by pawns
        if(side === this.defs.COLOURS.WHITE){
            if(this.pieces[square - 11] === this.defs.PIECES.wP || this.pieces[square - 9] === this.defs.PIECES.wP){
                return this.defs.BOOL.TRUE;
            }
        }
        else{
            if(this.pieces[square + 11] === this.defs.PIECES.bP || this.pieces[square + 9] === this.defs.PIECES.bP){
                return this.defs.BOOL.TRUE;
            }
        }
        
        // Check if square is attacked by knights
        for(let i = 0 ; i < this.defs.KnightDirections.length ; i++){
            let piece = this.pieces[square + this.defs.KnightDirections[i]];
            if(piece !== this.defs.SQUARES.OFFBOARD && this.defs.PieceCol[piece] === side 
                && this.defs.PieceKnight[piece] === this.defs.BOOL.TRUE){
                return this.defs.BOOL.TRUE;
            }
        }

        // Check if square is attacked horizontally/vertically by a sliding piece
        for(let i = 0 ; i < this.defs.RookDirections.length ; i++){
            let direction = this.defs.RookDirections[i];
            let currentSquare = square + direction;
            let piece = this.pieces[currentSquare];
            while(piece !== this.defs.SQUARES.OFFBOARD){
                if(piece !== this.defs.PIECES.EMPTY){
                    if(this.defs.PieceRookQueen[piece] === this.defs.BOOL.TRUE 
                        && this.defs.PieceCol[piece] == side){
                        return this.defs.BOOL.TRUE;
                    }
                    break;
                }
                currentSquare += direction;
                piece = this.pieces[currentSquare];
            }
        }

        // Check if square is attacked diagonally by a sliding piece
        for(let i = 0 ; i < this.defs.BishopDirections.length ; i++){
            let direction = this.defs.BishopDirections[i];
            let currentSquare = square + direction;
            let piece = this.pieces[currentSquare];
            while(piece !== this.defs.SQUARES.OFFBOARD){
                if(piece !== this.defs.PIECES.EMPTY){
                    if(this.defs.PieceBishopQueen[piece] === this.defs.BOOL.TRUE 
                        && this.defs.PieceCol[piece] == side){
                        return this.defs.BOOL.TRUE;
                    }
                    break;
                }
                currentSquare += direction;
                piece = this.pieces[currentSquare];
            }
        }

        // Check if square is attacked by a king
        for(let i = 0 ; i < this.defs.KingDirections.length ; i++){
            let piece = this.pieces[square + this.defs.KingDirections[i]];
            if(piece !== this.defs.SQUARES.OFFBOARD && this.defs.PieceCol[piece] === side
                && this.defs.PieceKing[piece] === this.defs.BOOL.TRUE){
                return this.defs.BOOL.TRUE;
            }
        }

        return this.defs.BOOL.FALSE;
    }

    PrintSquareAttacked(){
        let piece;
        let line;
        console.log("\nAttacked:\n");
        for(let rank = this.defs.RANKS.RANK_8 ; rank >= this.defs.RANKS.RANK_1 ; rank--){
            line = ((rank + 1) + " ");
            for(let file = this.defs.FILES.FILE_A ; file <= this.defs.FILES.FILE_H ; file++){
                let square = this.defs.FileRankToSquare(file, rank);
                if(this.SquareAttacked(square, this.side) === this.defs.BOOL.TRUE){
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
}