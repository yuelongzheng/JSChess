class searchController{
    constructor(definitions, board, maniupulatePiece, moveGeneration){
        this.defs = definitions;
        this.board = board;
        this.manPiece = maniupulatePiece;
        this.moveGen = moveGeneration;
        // All nodes visited in search
        this.nodes;
        // For move-ordering in search
        this.failHigh;
        this.failHighFirst;
        this.depth;
        this.time;
        this.start;
        this.stop;
        this.best;
        this.thinking;
        this.checkUpLimit = 2047; // Every 2048 nodes checkUp is called
    }

    checkUp(){
        if(($.now() - this.start) > this.time){
            this.stop = this.defs.BOOL.TRUE;
        }
    }

    isRepetition(){
        for(let index = this.board.hisPly - this.board.fiftyMove ; index < this.board.hisPly - 1 ; index++){
            if(this.board.posKey == this.board.history[index].posKey){
                return this.defs.BOOL.TRUE;
            }
        }
    }

    alphaBeta(alpha, beta, depth){
        if(depth <= 0){
            // return Evaluate()
        }

        if((this.nodes & this.checkUpLimit) === 0){
            this.checkUp();
        }
        this.nodes++;
        
        if((this.isRepetition() || this.board.fiftyMove >= 100) && this.board !== 0){
            return 0;
        }

        if(this.board.ply > this.defs.MAX_DEPTH - 1){
            // return Evaluation
        }
        let score = this.defs.INFINITE;
        this.moveGen.GenerateMoves(this.board);
        let moveNum = 0;
        let legalMoves = 0;
        let oldAlpha = alpha; 
        let bestMove = this.defs.NO_MOVE;
        let move = this.defs.NO_MOVE;

        // Get pricipal variation move
        // order principal variation move
        for(moveNum = this.board.moveListStart[this.board.ply]; moveNum < this.board.moveListStart[this.board.ply + 1] ; moveNum++){
            move = this.board.moveList[i];
            if(this.manPiece.MakeMove(this.board, move) === this.defs.BOOL.FALSE){
                continue;
            }
            score = - this.alphaBeta(-beta, -alpha, depth - 1);
            this.manPiece.UndoMove(this.board); 

            if(this.stop === this.defs.BOOL.TRUE){
                return 0;
            }   

            if(score > alpha){
                if(score >= beta){
                    if(legalMoves == 1){
                        this.failHighFirst++;
                    }
                    this.failHigh++;
                    // Update killer moves - killer moves update beta cutoff
                    return beta;
                }
                alpha = score;
                bestMove = move;
                // update history table
            }
        }
        // Mate Check
        if(alpha !== oldAlpha){
            // Store pv move
        }
        return alpha;
    }

    searchPosition(){
        let bestMove = this.defs.NO_MOVE;
        let bestScore = - this.defs.INFINITE;
        let currentDepth = 0;
        for(currentDepth = 1 ; currentDepth <= this.depth ; currentDepth++){
            // Alpha-Beta
            if(this.stop === this.BOOL.TRUE){
                break;
            }
        }
        this.best = bestMove;
        this.thinking = this.defs.BOOL.FALSE;
    }
}