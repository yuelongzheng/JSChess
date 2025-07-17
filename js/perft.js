export class perft{
    constructor(defs, board, manPiece, moveGen, inOut){
        this.defs = defs;
        this.board = board;
        this.perft_leftNodes;
        this.manPiece = manPiece;
        this.moveGen = moveGen;
        this.io = inOut;
    }

    Perft(depth){
        if(depth === 0){
            this.perft_leftNodes++;
            return;
        }
        this.moveGen.GenerateMoves(this.board);
        let move;
        for(let i = this.board.moveListStart[this.board.ply]; i < this.board.moveListStart[this.board.ply + 1] ; i++){
            move = this.board.moveList[i];
            if(this.manPiece.MakeMove(this.board, move) === this.defs.BOOL.FALSE){
                continue;
            }
            this.Perft(depth - 1);
            this.manPiece.UndoMove(this.board); 
        }
        return;
    }

    PerftTest(depth){
        this.board.PrintBoard();
        console.log("Starting Test To Depth : " + depth);
        this.perft_leftNodes = 0;
        this.moveGen.GenerateMoves(this.board);
        let move;
        let moveNum = 0;
        for(let i = this.board.moveListStart[this.board.ply]; i < this.board.moveListStart[this.board.ply + 1] ; i++){
            move = this.board.moveList[i];
            if(this.manPiece.MakeMove(this.board, move) === this.defs.BOOL.FALSE){
                continue;
            }
            moveNum++;
            let cumulative_nodes = this.perft_leftNodes;
            this.Perft(depth - 1);
            this.manPiece.UndoMove(this.board);
            let oldNodes = this.perft_leftNodes - cumulative_nodes;
            console.log("move: " + moveNum + " " + this.io.PrintMove(move) + " " + oldNodes);
        }

        console.log("Test Complete : " + this.perft_leftNodes + " leaf nodes visited");
        return this.perft_leftNodes;
    }
}