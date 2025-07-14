let perft_leftNodes;

function Perft(depth){
    if(depth === 0){
        perft_leftNodes++;
        return;
    }
    GenerateMoves();
    let move;
    for(let i = GameBoard.moveListStart[GameBoard.ply]; i < GameBoard.moveListStart[GameBoard.ply + 1] ; i++){
        move = GameBoard.moveList[i];
        if(MakeMove(move) === BOOL.FALSE){
            continue;
        }
        Perft(depth - 1);
        UndoMove(); 
    }
    return;
}

function PerftTest(depth){
    PrintBoard();
    console.log("Starting Test To Depth : " + depth);
    perft_leftNodes = 0;
    GenerateMoves();
    let move;
    let moveNum = 0;
    for(let i = GameBoard.moveListStart[GameBoard.ply]; i < GameBoard.moveListStart[GameBoard.ply + 1] ; i++){
        move = GameBoard.moveList[i];
        if(MakeMove(move) === BOOL.FALSE){
            continue;
        }
        moveNum++;
        let cumulative_nodes = perft_leftNodes;
        Perft(depth - 1);
        UndoMove();
        let oldNodes = perft_leftNodes - cumulative_nodes;
        console.log("move: " + moveNum + " " + PrintMove(move) + " " + oldNodes);
    }

    console.log("Test Complete : " + perft_leftNodes + " leaf nodes visited");
    return;
}