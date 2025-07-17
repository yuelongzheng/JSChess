import { Definitions } from "./defs.js"
import { InOut } from "./io.js";
import { GameBoard } from "./board.js";
let defs = new Definitions();
let io = new InOut(defs);
let board = new GameBoard(defs, io);
// supress console.log
const consoleLog = console.log;
console.log = jest.fn();

describe("Board Properties", () => {
    test('board.pieces.length should result in 120', () => {
        expect(board.pieces.length).toBe(120);
    });
});

describe("ParseFEN", () => {
    test('board.enPassant to be 99', () => {
        board.ParseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
        expect(board.enPassant).toBe(99);
    });
});

describe("IsSquareOffBoard function", () =>{
    test('IsSquareOffBoard(board,0) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,0)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,1) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,1)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,2) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,2)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,3) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,3)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,4) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,4)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,5) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,5)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,6) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,6)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,7) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,7)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,8) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,8)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,9) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,9)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,10) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,10)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,11) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,11)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,12) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,12)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,13) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,13)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,14) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,14)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,15) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,15)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,16) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,16)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,17) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,17)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,18) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,18)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,19) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,19)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,20) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,20)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,21) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,21)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,22) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,22)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,23) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,23)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,24) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,24)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,25) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,25)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,26) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,26)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,27) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,27)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,28) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,28)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,29) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,29)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,30) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,30)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,31) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,31)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,32) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,32)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,33) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,33)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,34) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,34)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,35) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,35)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,36) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,36)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,37) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,37)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,38) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,38)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,39) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,39)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,40) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,40)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,41) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,41)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,42) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,42)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,43) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,43)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,44) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,44)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,45) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,45)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,46) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,46)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,47) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,47)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,48) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,48)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,49) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,49)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,50) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,50)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,51) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,51)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,52) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,52)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,53) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,53)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,54) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,54)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,55) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,55)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,56) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,56)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,57) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,57)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,58) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,58)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,59) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,59)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,60) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,60)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,61) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,61)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,62) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,62)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,63) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,63)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,64) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,64)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,65) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,65)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,66) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,66)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,67) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,67)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,68) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,68)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,69) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,69)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,70) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,70)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,71) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,71)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,72) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,72)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,73) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,73)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,74) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,74)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,75) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,75)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,76) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,76)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,77) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,77)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,78) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,78)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,79) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,79)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,80) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,80)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,81) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,81)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,82) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,82)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,83) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,83)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,84) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,84)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,85) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,85)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,86) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,86)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,87) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,87)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,88) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,88)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,89) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,89)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,90) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,90)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,91) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,91)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,92) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,92)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,93) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,93)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,94) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,94)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,95) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,95)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,96) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,96)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,97) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,97)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,98) should result in BOOL.FALSE', () => {
        expect(defs.IsSquareOffBoard(board,98)).toBe(defs.BOOL.FALSE);
    });
    test('IsSquareOffBoard(board,99) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,99)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,100) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,100)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,101) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,101)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,102) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,102)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,103) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,103)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,104) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,104)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,105) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,105)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,106) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,106)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,107) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,107)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,108) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,108)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,109) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,109)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,110) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,110)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,111) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,111)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,112) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,112)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,113) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,113)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,114) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,114)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,115) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,115)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,116) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,116)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,117) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,117)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,118) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,118)).toBe(defs.BOOL.TRUE);
    });
    test('IsSquareOffBoard(board,119) should result in BOOL.TRUE', () => {
        expect(defs.IsSquareOffBoard(board,119)).toBe(defs.BOOL.TRUE);
    });
});