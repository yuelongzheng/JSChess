const { GameBoard, 
        SquareAttacked } = require("./board");

const { NO_MOVE, 
        INFINITE, 
        BOOL,
        MAX_DEPTH, 
        pieceIndex,
        Kings,
        MATE,
        PV_ENTRIES} = require("./defs");

const { evaluatePosition } = require("./evaluate");
const { PrintMove } = require("./io");

const { UndoMove, 
        MakeMove } = require("./makemove");

const { GenerateMoves } = require("./movegen");

const { storePvMove,
        probePvTable, 
        getPvLine} = require("./pvtable");

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

    searchController.nodes++;
    if(depth <= 0){
        return evaluatePosition();
    }

    // equaivalent of searchController.nodes % 2048, & is just faster
    if((searchController.nodes & checkUpNodes) === 0){
        checkUp();
    }
    // searchController.nodes++;

    if((isRepetition() || GameBoard.fiftyMove >= 100) && GameBoard.ply !== 0) {
        return 0;
    }
    
    if(GameBoard.ply > MAX_DEPTH - 1){
        return evaluatePosition();
    }

    let inCheck = SquareAttacked(GameBoard.pieceList[pieceIndex(Kings[GameBoard.side], 0)], GameBoard.side^1);
    if(inCheck === BOOL.TRUE){
        depth++; // look deeper to avoid checks
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

    if(legalMoves === 0){
        if(inCheck === BOOL.TRUE){
            return (-MATE + GameBoard.ply);
        }
        else{
            return 0;
        }
    }

    if(alpha !== oldAlpha){
        storePvMove(bestMove);
    }
    return alpha;
}

function clearPvTable(){
    for(let i = 0 ; i < PV_ENTRIES ; i++){
        GameBoard.pvTable[i].move = NO_MOVE;
        GameBoard.pvTable[i].posKey = 0;
    }
}

function clearForSearch(){
    for(let i = 0 ; i < GameBoard.searchHistory.length ; i++){
        GameBoard.searchHistory[i] = 0;
    }
    for(let i = 0 ; i < GameBoard.searchKillers.length ; i++){
        GameBoard.searchKillers[i] = 0;
    }
    clearPvTable();
    GameBoard.ply = 0;
    searchController.nodes = 0;
    searchController.failHigh = 0;
    searchController.failHighFirst = 0;
    searchController.start = Date.now();
    searchController.stop = BOOL.FALSE;
}

function searchPosition(){
    let bestMove = NO_MOVE;
    let bestScore = -INFINITE;
    let line;
    let pvNum;
    clearForSearch();

    for(let currentDepth = 1 ; currentDepth <= /*searchController.depth*/ 5  ; currentDepth++){
        bestScore = alphaBeta(-INFINITE, INFINITE, currentDepth);
        if(searchController.stop === BOOL.TRUE){
            break;
        }
        bestMove = probePvTable();
        line = 'Depth: ' + currentDepth
        line +=' Best Move: ' + PrintMove(bestMove) 
        line += ' Score: ' + bestScore
        line += ' nodes: ' + searchController.nodes;
        pvNum = getPvLine(currentDepth);
        line += ' Pv :';
        for(let c = 0 ; c < pvNum ; c++){
            line += ' ' + PrintMove(GameBoard.pvArray[c]);
        }
        console.log(line);
    }
    searchController.bestMove = bestMove;
    searchController.thinking = BOOL.FALSE;
}

module.exports = {
    searchPosition
}
