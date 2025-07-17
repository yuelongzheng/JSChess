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