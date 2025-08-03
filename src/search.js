const { GameBoard } = require("./board");

const { NO_MOVE, 
        INFINITE, 
        BOOL,
        MAX_DEPTH } = require("./defs");
const { evaluatePosition } = require("./evaluate");

const { UndoMove } = require("./makemove");

const { GenerateMoves } = require("./movegen");

const searchController = {}

searchController.nodes;
// Stats for alpha-beta pruning
searchController.failHigh;
searchController.failHighFirst;
searchController.depth;
searchController.time;
searchController.startTime;
searchController.stop;
searchController.bestMove;
searchController.thinking;

const checkUpNodes = 2047; 

function checkUp(){
    if((Date.now() - searchController.start) > searchController.time){
        searchController.stop = BOOL.TRUE;
    }
}

function isRepetition(){
    // Check the last set of moves within fiftyMove for repetitions
    // hisPly - 1 because it was the last time current player moved
    for(let index = GameBoard.hisPly - GameBoard.fiftyMove; index < GameBoard.hisPly - 1; index++){
        if(GameBoard.posKey === GameBoard.history[index].posKey){
            return BOOL.TRUE;
        }
    }
    return BOOL.FALSE;
}

function alphaBeta(alpha, beta, depth){
    if(depth <= 0){
        return evaluatePosition();
    }

    // equaivalent of searchController.nodes % 2048, & is just faster
    if((searchController.nodes & checkUpNodes) === 0){
        checkUp();
    }
    searchController.nodes++;

    if((isRepetition() || GameBoard.fiftyMove >= 100) && GameBoard.ply != 0) {
        return 0;
    }
    
    if(GameBoard.ply > MAX_DEPTH - 1){
        return evaluatePosition();
    }
    let score = -INFINITE;

    GenerateMoves();

    let legalMoves = 0;
    let oldAlpha = alpha;
    let bestMove = NO_MOVE;
    let move = NO_MOVE;
    // Get principal variation
    // Order principal vairiation

    for(let moveNum = GameBoard.moveListStart[GameBoard.ply]; moveNum < GameBoard.moveListStart[GameBoard.ply + 1] ; moveNum++){
        move = GameBoard.moveList[moveNum];
        if(MakeMove(move) === BOOL.FALSE){
            continue;
        }
        legalMoves++;
        score = -alphaBeta(-beta, -alpha, depth - 1);
        UndoMove(); 
        if(searchController.stop === BOOL.TRUE){
            return 0;
        }
        
        if(score > alpha){
            if(score >= beta){
                if(legalMoves == 1){
                    searchController.failHighFirst++;
                }
                searchController.failHigh++;
                // Update killer moves - most recent two moves that caused a beta cut-off
                return beta;
            }
            alpha = score;
            bestMove = move;
            // update history table
        }
    }
    // Mate Check or stalemate check
    if(alpha !== oldAlpha){
        // store principal vairaition move
    }
    return alpha;
}

function searchPosition(){
    let bestMove = NO_MOVE;
    let bestScore = -INFINITE;

    for(let currentDepth = 1 ; currentDepth <= searchController.depth ; currentDepth++){
        if(searchController.stop === BOOL.TRUE){
            break;
        }
    }
    searchController.bestMove = bestMove;
    searchController.thinking = BOOL.FALSE;
}

