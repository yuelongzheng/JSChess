$(function(){
    init();
    console.log("Main Init Called");
});

function InitFilesRanksBoard(){
    for(let index = 0 ; index < BOARD_SQUARE_NUM ; index++){
        FilesBoard[index] = SQUARES.OFFBOARD;
        RanksBoard[index] = SQUARES.OFFBOARD;
    }

    for(let rank = RANKS.RANK_1 ; rank <= RANKS.RANK_8 ; rank++){
        for(let file = FILES.FILE_A ; file <= FILES.FILE_H ; file++){
            let square = FileRankToSquare(file, rank);
            FilesBoard[square] = file;
            RanksBoard[square] = rank;
        }
    }


    console.log("FilesBoard[0]: " + FilesBoard[0] + "," +  " RanksBoard[0]: " + RanksBoard[0]);
    console.log("FilesBoard[SQUARES.A1]: " + FilesBoard[SQUARES.A1] + "," + " RanksBoard[SQUARES.A1]: " + RanksBoard[SQUARES.A1]);
    console.log("FilesBoard[SQUARES.E8]: " + FilesBoard[SQUARES.E8] + "," + " RanksBoard[SQUARES.E8]: " + RanksBoard[SQUARES.E8]);
}

function InitHashKeys(){
    for(let index = 0 ; index < 14 * 120 ; index++){
        PieceKeys[index] = RAND_31();
    }
    SideKey = RAND_31();
    for(let index = 0 ; index < 16 ; index++){
        CastleKeys[index] = RAND_31();
    }
}

// Initialize Square120ToSquare64 and Square64ToSquare120
function InitSquare120ToSquare64(){
    let square64 = 0;
    let outOfIndex64 = 64;

    for(let index = 0 ; index < BOARD_SQUARE_NUM ; index++){
        Square120ToSquare64[index] = outOfIndex64;
    }
    for(let index = 0 ; index < outOfIndex64 ; index++){
        Square64ToSquare120[index] = BOARD_SQUARE_NUM;
    }

    for(let rank = RANKS.RANK_1 ; rank <= RANKS.RANK_8 ; rank++){
        for(let file = FILES.FILE_A ; files <= FILE_H ; file++){
            let square = FileRankToSquare(file, rank);
            Square64ToSquare120[square64] = square;
            Square120ToSquare64[square] = square64;
            square64++; 
        }
    }


}
function init(){
    console.log("init() called");
    InitFilesRanksBoard();
    InitHashKeys();
}