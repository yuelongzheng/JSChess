export class InOut{
    constructor(defs){
        this.defs = defs;
    }

    PrintSquare(square){
        return this.defs.FileChar[this.defs.FilesBoard[square]] + 
        this.defs.RankChar[this.defs.RanksBoard[square]];
    }

    PrintMove(move){
        let fromSquare = this.defs.getFromSquare(move);
        let toSquare = this.defs.getToSquare(move);
        let fromFile = this.defs.FilesBoard[fromSquare];
        let fromRank = this.defs.RanksBoard[fromSquare];
        let toFile = this.defs.FilesBoard[toSquare];
        let toRank = this.defs.RanksBoard[toSquare];

        let moveString = this.defs.FileChar[fromFile] + this.defs.RankChar[fromRank];
        moveString += this.defs.FileChar[toFile] + this.defs.RankChar[toRank];

        let promoted = this.defs.getPromotion(move);
        if(promoted !== this.defs.PIECES.EMPTY){
            let promotedChar = 'q';
            if(this.defs.PieceKnight[promoted] === this.defs.BOOL.TRUE){
                promotedChar = 'n';
            }
            else if(this.defs.PieceRookQueen[promoted] === this.defs.BOOL.TRUE && 
                this.defs.PieceBishopQueen[promoted] === this.defs.BOOL.FALSE){
                promotedChar = 'r';
            }
            else if(this.defs.PieceRookQueen[promoted] === this.defs.BOOL.FALSE && 
                this.defs.PieceBishopQueen[promoted] === this.defs.BOOL.TRUE){
                promotedChar = 'b';
            }
            moveString += promotedChar;
        }
        return moveString;
    }

    PrintMoveList(board){
        let move;
        let count = 1;
        console.log('Move list: ');
        for(let i = board.moveListStart[board.ply] ; i < board.moveListStart[board.ply + 1] ; i++){
            move = board.moveList[i];
            console.log('Move ' + count++ + ': ' + PrintMove(move));
        }
    }
}