$(function(){
    init();
    console.log("Main Init Called");
    ParseFen(START_FEN);
    PrintBoard();
    GenerateMoves();
    PrintMoveList();
    CheckBoard();
});

function InitFilesRanksBoard(){
    FilesBoard.fill(SQUARES.OFFBOARD, 0, FilesBoard.length);
    RanksBoard.fill(SQUARES.OFFBOARD, 0, RanksBoard.length);
    let square;
    for(let rank = RANKS.RANK_1 ; rank <= RANKS.RANK_8 ; rank++){
        for(let file = FILES.FILE_A ; file <= FILES.FILE_H ; file++){
            square = FileRankToSquare(file, rank);
            FilesBoard[square] = file;
            RanksBoard[square] = rank;
        }
    }
}

function InitHashKeys(){
    // PieceKeys.fill(RAND_31(), 0, PieceKeys.length)
    // This is unacceptable becuase RAND_31 is called once only, instead of multiple times
    for(let index = 0 ; index < PieceKeys.length ; index++){
        PieceKeys[index] = RAND_31();
    }
    SideKey = RAND_31();
    for(let index = 0 ; index < CastleKeys.length ; index++){
        CastleKeys[index] = RAND_31();
    }
}

// Initialize Square120ToSquare64 and Square64ToSquare120
function InitSquare120ToSquare64(){
    let square64 = 0;
    let outOfIndex64 = 64;
    let square;
    Square120ToSquare64.fill(outOfIndex64, 0, Square120ToSquare64.length);
    Square64ToSquare120.fill(BOARD_SQUARE_NUM, 0, Square64ToSquare120.length);
    for(let rank = RANKS.RANK_1 ; rank <= RANKS.RANK_8 ; rank++){
        for(let file = FILES.FILE_A ; file <= FILES.FILE_H ; file++){
            square = FileRankToSquare(file, rank);
            Square64ToSquare120[square64] = square;
            Square120ToSquare64[square] = square64++;
        }
    }

}
function init(){
    console.log("init() called");
    InitFilesRanksBoard();
    InitHashKeys();
    InitSquare120ToSquare64();
}