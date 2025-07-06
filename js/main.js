$(function(){
    init();
    console.log("Main Init Called");
});

function InitFilesRanksBoard(){
    let index = 0;
    let file = FILES.FILE_A;
    let rank = RANKS.RANK_1;
    let square = SQUARES.A1

    for(index = 0 ; index < BOARD_SQUARE_NUM ; index++){
        FilesBoard[index] = SQUARES.OFFBOARD;
        RanksBoard[index] = SQUARES.OFFBOARD;
    }

    for(rank = RANKS.RANK_1 ; rank <= RANKS.RANK_8 ; rank++){
        for(file = FILES.FILE_A ; file <= FILES.FILE_H ; file++){
            square = FileRankToSquare(file, rank);
            FilesBoard[square] = file;
            RanksBoard[square] = rank;
        }
    }

    console.log("FilesBoard[0]:" + FilesBoard[0] + "RanksBoard[0]:" + RanksBoard[0]);
    console.log("FilesBoard[SQUARES.A1]: " + FilesBoard[SQUARES.A1] + " RanksBoard[SQUARES.A1]: " + RanksBoard[SQUARES.A1]);
    console.log("FilesBoard[SQUARES.E8]: " + FilesBoard[SQUARES.E8] + " RanksBoard[SQUARES.E8]: " + RanksBoard[SQUARES.E8]);

}
function init(){
    console.log("init() called");
    InitFilesRanksBoard()
}