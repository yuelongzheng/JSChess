const { GameBoard } = require("./board");
const { FileChar, FilesBoard, RankChar, RanksBoard,
        getFromSquare, getToSquare, getPromotion,
        PIECES, BOOL, PieceKnight, PieceRookQueen,
        PieceBishopQueen } = require("./defs");

function PrintSquare(square){
    return FileChar[FilesBoard[square]] + RankChar[RanksBoard[square]];
}

function PrintMove(move){
        let fromSquare = getFromSquare(move);
        let toSquare = getToSquare(move);
        let fromFile = FilesBoard[fromSquare];
        let fromRank = RanksBoard[fromSquare];
        let toFile = FilesBoard[toSquare];
        let toRank = RanksBoard[toSquare];

        let moveString = FileChar[fromFile] + RankChar[fromRank];
        moveString += FileChar[toFile] + RankChar[toRank];

        let promoted = getPromotion(move);
        if(promoted !== PIECES.EMPTY){
            let promotedChar = 'q';
            if(PieceKnight[promoted] === BOOL.TRUE){
                promotedChar = 'n';
            }
            else if(PieceRookQueen[promoted] === BOOL.TRUE && 
                PieceBishopQueen[promoted] === BOOL.FALSE){
                promotedChar = 'r';
            }
            else if(PieceRookQueen[promoted] === BOOL.FALSE && 
                PieceBishopQueen[promoted] === BOOL.TRUE){
                promotedChar = 'b';
            }
            moveString += promotedChar;
        }
        return moveString;
}

function PrintMoveList(){
        let move;
        let count = 1;
        console.log('Move list: ');
        for(let i = GameBoard.moveListStart[GameBoard.ply] ; i < GameBoard.moveListStart[GameBoard.ply + 1] ; i++){
            move = GameBoard.moveList[i];
            console.log('Move ' + count++ + ': ' + PrintMove(move));
        }
}

module.exports = {
    PrintSquare,
    PrintMove,
    PrintMoveList
}