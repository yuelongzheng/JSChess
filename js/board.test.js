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

describe("Starting FEN string ParseFEN", () => {
    board.ParseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    test('board.enPassant to be 99', () => {
        expect(board.enPassant).toBe(99);
    });
    test('board.side to be COLOURS.WHITE', () => {
        expect(board.side).toBe(defs.COLOURS.WHITE);
    })
    test('board.castlePermission to be 15', () => {
        expect(board.castlePermission).toBe(15);
    });
    test('board.pieceList[21] to be PIECES.wR', () => {
        expect(board.pieces[21]).toBe(defs.PIECES.wR);
    });
    test('board.pieceList[22] to be PIECES.wN', () => {
        expect(board.pieces[22]).toBe(defs.PIECES.wN);
    });
    test('board.pieceList[23] to be PIECES.wB', () => {
        expect(board.pieces[23]).toBe(defs.PIECES.wB);
    });
    test('board.pieceList[24] to be PIECES.wQ', () => {
        expect(board.pieces[24]).toBe(defs.PIECES.wQ);
    });
    test('board.pieceList[25] to be PIECES.wK', () => {
        expect(board.pieces[25]).toBe(defs.PIECES.wK);
    });
    test('board.pieceList[26] to be PIECES.wB', () => {
        expect(board.pieces[26]).toBe(defs.PIECES.wB);
    });
    test('board.pieceList[27] to be PIECES.wN', () => {
        expect(board.pieces[27]).toBe(defs.PIECES.wN);
    });
    test('board.pieceList[28] to be PIECES.wR', () => {
        expect(board.pieces[28]).toBe(defs.PIECES.wR);
    });
    test('board.pieceList[31] to be PIECES.wP', () => {
        expect(board.pieces[31]).toBe(defs.PIECES.wP);
    });
    test('board.pieceList[32] to be PIECES.wP', () => {
        expect(board.pieces[32]).toBe(defs.PIECES.wP);
    });
    test('board.pieceList[33] to be PIECES.wP', () => {
        expect(board.pieces[33]).toBe(defs.PIECES.wP);
    });
    test('board.pieceList[34] to be PIECES.wP', () => {
        expect(board.pieces[34]).toBe(defs.PIECES.wP);
    });
    test('board.pieceList[35] to be PIECES.wP', () => {
        expect(board.pieces[35]).toBe(defs.PIECES.wP);
    });
    test('board.pieceList[36] to be PIECES.wP', () => {
        expect(board.pieces[36]).toBe(defs.PIECES.wP);
    });
    test('board.pieceList[37] to be PIECES.wP', () => {
        expect(board.pieces[37]).toBe(defs.PIECES.wP);
    });
    test('board.pieceList[38] to be PIECES.wP', () => {
        expect(board.pieces[38]).toBe(defs.PIECES.wP);
    });
    test('board.pieceList[41] to be PIECES.EMPTY', () => {
        expect(board.pieces[41]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[42] to be PIECES.EMPTY', () => {
        expect(board.pieces[42]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[43] to be PIECES.EMPTY', () => {
        expect(board.pieces[43]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[44] to be PIECES.EMPTY', () => {
        expect(board.pieces[44]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[45] to be PIECES.EMPTY', () => {
        expect(board.pieces[45]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[46] to be PIECES.EMPTY', () => {
        expect(board.pieces[46]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[47] to be PIECES.EMPTY', () => {
        expect(board.pieces[47]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[48] to be PIECES.EMPTY', () => {
        expect(board.pieces[48]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[51] to be PIECES.EMPTY', () => {
        expect(board.pieces[51]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[52] to be PIECES.EMPTY', () => {
        expect(board.pieces[52]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[53] to be PIECES.EMPTY', () => {
        expect(board.pieces[53]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[54] to be PIECES.EMPTY', () => {
        expect(board.pieces[54]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[55] to be PIECES.EMPTY', () => {
        expect(board.pieces[55]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[56] to be PIECES.EMPTY', () => {
        expect(board.pieces[56]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[57] to be PIECES.EMPTY', () => {
        expect(board.pieces[57]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[58] to be PIECES.EMPTY', () => {
        expect(board.pieces[58]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[61] to be PIECES.EMPTY', () => {
        expect(board.pieces[61]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[62] to be PIECES.EMPTY', () => {
        expect(board.pieces[62]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[63] to be PIECES.EMPTY', () => {
        expect(board.pieces[63]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[64] to be PIECES.EMPTY', () => {
        expect(board.pieces[64]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[65] to be PIECES.EMPTY', () => {
        expect(board.pieces[65]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[66] to be PIECES.EMPTY', () => {
        expect(board.pieces[66]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[67] to be PIECES.EMPTY', () => {
        expect(board.pieces[67]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[68] to be PIECES.EMPTY', () => {
        expect(board.pieces[68]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[71] to be PIECES.EMPTY', () => {
        expect(board.pieces[71]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[72] to be PIECES.EMPTY', () => {
        expect(board.pieces[72]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[73] to be PIECES.EMPTY', () => {
        expect(board.pieces[73]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[74] to be PIECES.EMPTY', () => {
        expect(board.pieces[74]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[75] to be PIECES.EMPTY', () => {
        expect(board.pieces[75]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[76] to be PIECES.EMPTY', () => {
        expect(board.pieces[76]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[77] to be PIECES.EMPTY', () => {
        expect(board.pieces[77]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[78] to be PIECES.EMPTY', () => {
        expect(board.pieces[78]).toBe(defs.PIECES.EMPTY);
    });
    test('board.pieceList[81] to be PIECES.bP', () => {
        expect(board.pieces[81]).toBe(defs.PIECES.bP);
    });
    test('board.pieceList[82] to be PIECES.bP', () => {
        expect(board.pieces[82]).toBe(defs.PIECES.bP);
    });
    test('board.pieceList[83] to be PIECES.bP', () => {
        expect(board.pieces[83]).toBe(defs.PIECES.bP);
    });
    test('board.pieceList[84] to be PIECES.bP', () => {
        expect(board.pieces[84]).toBe(defs.PIECES.bP);
    });
    test('board.pieceList[85] to be PIECES.bP', () => {
        expect(board.pieces[85]).toBe(defs.PIECES.bP);
    });
    test('board.pieceList[86] to be PIECES.bP', () => {
        expect(board.pieces[86]).toBe(defs.PIECES.bP);
    });
    test('board.pieceList[87] to be PIECES.bP', () => {
        expect(board.pieces[87]).toBe(defs.PIECES.bP);
    });
    test('board.pieceList[88] to be PIECES.bP', () => {
        expect(board.pieces[88]).toBe(defs.PIECES.bP);
    });
    test('board.pieceList[91] to be PIECES.bR', () => {
        expect(board.pieces[91]).toBe(defs.PIECES.bR);
    });
    test('board.pieceList[92] to be PIECES.bN', () => {
        expect(board.pieces[92]).toBe(defs.PIECES.bN);
    });
    test('board.pieceList[93] to be PIECES.bB', () => {
        expect(board.pieces[93]).toBe(defs.PIECES.bB);
    });
    test('board.pieceList[94] to be PIECES.bQ', () => {
        expect(board.pieces[94]).toBe(defs.PIECES.bQ);
    });
    test('board.pieceList[95] to be PIECES.bK', () => {
        expect(board.pieces[95]).toBe(defs.PIECES.bK);
    });
    test('board.pieceList[96] to be PIECES.bB', () => {
        expect(board.pieces[96]).toBe(defs.PIECES.bB);
    });
    test('board.pieceList[97] to be PIECES.bN', () => {
        expect(board.pieces[97]).toBe(defs.PIECES.bN);
    });
    test('board.pieceList[98] to be PIECES.bR', () => {
        expect(board.pieces[98]).toBe(defs.PIECES.bR);
    });
    test('board.pieceList[0] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[0]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[1] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[1]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[2] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[2]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[3] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[3]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[4] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[4]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[5] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[5]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[6] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[6]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[7] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[7]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[8] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[8]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[9] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[9]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[10] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[10]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[11] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[11]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[12] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[12]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[13] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[13]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[14] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[14]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[15] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[15]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[16] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[16]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[17] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[17]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[18] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[18]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[19] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[19]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[20] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[20]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[30] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[30]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[40] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[40]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[50] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[50]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[60] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[60]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[70] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[70]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[80] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[80]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[90] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[90]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[29] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[29]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[39] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[39]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[49] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[49]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[59] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[59]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[69] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[69]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[79] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[79]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[89] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[89]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[99] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[99]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[100] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[100]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[101] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[101]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[102] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[102]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[103] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[103]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[104] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[104]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[105] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[105]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[106] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[106]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[107] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[107]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[108] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[108]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[109] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[109]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[110] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[110]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[111] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[111]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[112] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[112]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[113] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[113]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[114] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[114]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[115] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[115]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[116] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[116]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[117] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[117]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[118] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[118]).toBe(defs.SQUARES.OFFBOARD);
    });
    test('board.pieceList[119] to be SQUARES.OFFBOARD', () => {
        expect(board.pieces[119]).toBe(defs.SQUARES.OFFBOARD);
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

describe("Board Material", () => {
    test('Testing board for rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', () => {
        board.ParseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
        expect(board.material[0]).toBe(54200);
        expect(board.material[1]).toBe(54200);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(15);
    });
    test('Testing board for r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1', () => {
        board.ParseFen("r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1");
        expect(board.material[0]).toBe(54200);
        expect(board.material[1]).toBe(54200);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(15);
    });
    test('Testing board for 4k3/8/8/8/8/8/8/4K2R w K - 0 1', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/4K2R w K - 0 1");
        expect(board.material[0]).toBe(50550);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(1);
    });
    test('Testing board for 4k3/8/8/8/8/8/8/R3K3 w Q - 0 1', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/R3K3 w Q - 0 1");
        expect(board.material[0]).toBe(50550);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(2);
    });
    test('Testing board for 4k2r/8/8/8/8/8/8/4K3 w k - 0 1', () => {
        board.ParseFen("4k2r/8/8/8/8/8/8/4K3 w k - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50550);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(4);
    });
    test('Testing board for r3k3/8/8/8/8/8/8/4K3 w q - 0 1', () => {
        board.ParseFen("r3k3/8/8/8/8/8/8/4K3 w q - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50550);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(8);
    });
    test('Testing board for 4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(3);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/4K3 w kq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/4K3 w kq - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(12);
    });
    test('Testing board for 8/8/8/8/8/8/6k1/4K2R w K - 0 1', () => {
        board.ParseFen("8/8/8/8/8/8/6k1/4K2R w K - 0 1");
        expect(board.material[0]).toBe(50550);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(1);
    });
    test('Testing board for 8/8/8/8/8/8/1k6/R3K3 w Q - 0 1', () => {
        board.ParseFen("8/8/8/8/8/8/1k6/R3K3 w Q - 0 1");
        expect(board.material[0]).toBe(50550);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(2);
    });
    test('Testing board for 4k2r/6K1/8/8/8/8/8/8 w k - 0 1', () => {
        board.ParseFen("4k2r/6K1/8/8/8/8/8/8 w k - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50550);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(4);
    });
    test('Testing board for r3k3/1K6/8/8/8/8/8/8 w q - 0 1', () => {
        board.ParseFen("r3k3/1K6/8/8/8/8/8/8 w q - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50550);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(8);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(15);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/1R2K2R w Kkq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/1R2K2R w Kkq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(13);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/2R1K2R w Kkq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/2R1K2R w Kkq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(13);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/R3K1R1 w Qkq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/R3K1R1 w Qkq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(14);
    });
    test('Testing board for 1r2k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1', () => {
        board.ParseFen("1r2k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(7);
    });
    test('Testing board for 2r1k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1', () => {
        board.ParseFen("2r1k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(7);
    });
    test('Testing board for r3k1r1/8/8/8/8/8/8/R3K2R w KQq - 0 1', () => {
        board.ParseFen("r3k1r1/8/8/8/8/8/8/R3K2R w KQq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(11);
    });
    test('Testing board for 4k3/8/8/8/8/8/8/4K2R b K - 0 1', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/4K2R b K - 0 1");
        expect(board.material[0]).toBe(50550);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(1);
    });
    test('Testing board for 4k3/8/8/8/8/8/8/R3K3 b Q - 0 1', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/R3K3 b Q - 0 1");
        expect(board.material[0]).toBe(50550);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(2);
    });
    test('Testing board for 4k2r/8/8/8/8/8/8/4K3 b k - 0 1', () => {
        board.ParseFen("4k2r/8/8/8/8/8/8/4K3 b k - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50550);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(4);
    });
    test('Testing board for r3k3/8/8/8/8/8/8/4K3 b q - 0 1', () => {
        board.ParseFen("r3k3/8/8/8/8/8/8/4K3 b q - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50550);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(8);
    });
    test('Testing board for 4k3/8/8/8/8/8/8/R3K2R b KQ - 0 1', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/R3K2R b KQ - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(3);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/4K3 b kq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/4K3 b kq - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(12);
    });
    test('Testing board for 8/8/8/8/8/8/6k1/4K2R b K - 0 1', () => {
        board.ParseFen("8/8/8/8/8/8/6k1/4K2R b K - 0 1");
        expect(board.material[0]).toBe(50550);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(1);
    });
    test('Testing board for 8/8/8/8/8/8/1k6/R3K3 b Q - 0 1', () => {
        board.ParseFen("8/8/8/8/8/8/1k6/R3K3 b Q - 0 1");
        expect(board.material[0]).toBe(50550);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(2);
    });
    test('Testing board for 4k2r/6K1/8/8/8/8/8/8 b k - 0 1', () => {
        board.ParseFen("4k2r/6K1/8/8/8/8/8/8 b k - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50550);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(4);
    });
    test('Testing board for r3k3/1K6/8/8/8/8/8/8 b q - 0 1', () => {
        board.ParseFen("r3k3/1K6/8/8/8/8/8/8 b q - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50550);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(8);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/R3K2R b KQkq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/R3K2R b KQkq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(15);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/1R2K2R b Kkq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/1R2K2R b Kkq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(13);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/2R1K2R b Kkq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/2R1K2R b Kkq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(13);
    });
    test('Testing board for r3k2r/8/8/8/8/8/8/R3K1R1 b Qkq - 0 1', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/R3K1R1 b Qkq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(14);
    });
    test('Testing board for 1r2k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1', () => {
        board.ParseFen("1r2k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(7);
    });
    test('Testing board for 2r1k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1', () => {
        board.ParseFen("2r1k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(7);
    });
    test('Testing board for r3k1r1/8/8/8/8/8/8/R3K2R b KQq - 0 1', () => {
        board.ParseFen("r3k1r1/8/8/8/8/8/8/R3K2R b KQq - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(11);
    });
    test('Testing board for 8/1n4N1/2k5/8/8/5K2/1N4n1/8 w - - 0 1', () => {
        board.ParseFen("8/1n4N1/2k5/8/8/5K2/1N4n1/8 w - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/1k6/8/5N2/8/4n3/8/2K5 w - - 0 1', () => {
        board.ParseFen("8/1k6/8/5N2/8/4n3/8/2K5 w - - 0 1");
        expect(board.material[0]).toBe(50325);
        expect(board.material[1]).toBe(50325);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/4k3/3Nn3/3nN3/4K3/8/8 w - - 0 1', () => {
        board.ParseFen("8/8/4k3/3Nn3/3nN3/4K3/8/8 w - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for K7/8/2n5/1n6/8/8/8/k6N w - - 0 1', () => {
        board.ParseFen("K7/8/2n5/1n6/8/8/8/k6N w - - 0 1");
        expect(board.material[0]).toBe(50325);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/2N5/1N6/8/8/8/K6n w - - 0 1', () => {
        board.ParseFen("k7/8/2N5/1N6/8/8/8/K6n w - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50325);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/1n4N1/2k5/8/8/5K2/1N4n1/8 b - - 0 1', () => {
        board.ParseFen("8/1n4N1/2k5/8/8/5K2/1N4n1/8 b - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/1k6/8/5N2/8/4n3/8/2K5 b - - 0 1', () => {
        board.ParseFen("8/1k6/8/5N2/8/4n3/8/2K5 b - - 0 1");
        expect(board.material[0]).toBe(50325);
        expect(board.material[1]).toBe(50325);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/3K4/3Nn3/3nN3/4k3/8/8 b - - 0 1', () => {
        board.ParseFen("8/8/3K4/3Nn3/3nN3/4k3/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for K7/8/2n5/1n6/8/8/8/k6N b - - 0 1', () => {
        board.ParseFen("K7/8/2n5/1n6/8/8/8/k6N b - - 0 1");
        expect(board.material[0]).toBe(50325);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/2N5/1N6/8/8/8/K6n b - - 0 1', () => {
        board.ParseFen("k7/8/2N5/1N6/8/8/8/K6n b - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50325);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for B6b/8/8/8/2K5/4k3/8/b6B w - - 0 1', () => {
        board.ParseFen("B6b/8/8/8/2K5/4k3/8/b6B w - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/1B6/7b/7k/8/2B1b3/7K w - - 0 1', () => {
        board.ParseFen("8/8/1B6/7b/7k/8/2B1b3/7K w - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/B7/1B6/1B6/8/8/8/K6b w - - 0 1', () => {
        board.ParseFen("k7/B7/1B6/1B6/8/8/8/K6b w - - 0 1");
        expect(board.material[0]).toBe(50975);
        expect(board.material[1]).toBe(50325);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for K7/b7/1b6/1b6/8/8/8/k6B w - - 0 1', () => {
        board.ParseFen("K7/b7/1b6/1b6/8/8/8/k6B w - - 0 1");
        expect(board.material[0]).toBe(50325);
        expect(board.material[1]).toBe(50975);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for B6b/8/8/8/2K5/5k2/8/b6B b - - 0 1', () => {
        board.ParseFen("B6b/8/8/8/2K5/5k2/8/b6B b - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/1B6/7b/7k/8/2B1b3/7K b - - 0 1', () => {
        board.ParseFen("8/8/1B6/7b/7k/8/2B1b3/7K b - - 0 1");
        expect(board.material[0]).toBe(50650);
        expect(board.material[1]).toBe(50650);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/B7/1B6/1B6/8/8/8/K6b b - - 0 1', () => {
        board.ParseFen("k7/B7/1B6/1B6/8/8/8/K6b b - - 0 1");
        expect(board.material[0]).toBe(50975);
        expect(board.material[1]).toBe(50325);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for K7/b7/1b6/1b6/8/8/8/k6B b - - 0 1', () => {
        board.ParseFen("K7/b7/1b6/1b6/8/8/8/k6B b - - 0 1");
        expect(board.material[0]).toBe(50325);
        expect(board.material[1]).toBe(50975);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/RR6/8/8/8/8/rr6/7K w - - 0 1', () => {
        board.ParseFen("7k/RR6/8/8/8/8/rr6/7K w - - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for R6r/8/8/2K5/5k2/8/8/r6R w - - 0 1', () => {
        board.ParseFen("R6r/8/8/2K5/5k2/8/8/r6R w - - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/RR6/8/8/8/8/rr6/7K b - - 0 1', () => {
        board.ParseFen("7k/RR6/8/8/8/8/rr6/7K b - - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for R6r/8/8/2K5/5k2/8/8/r6R b - - 0 1', () => {
        board.ParseFen("R6r/8/8/2K5/5k2/8/8/r6R b - - 0 1");
        expect(board.material[0]).toBe(51100);
        expect(board.material[1]).toBe(51100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 6kq/8/8/8/8/8/8/7K w - - 0 1', () => {
        board.ParseFen("6kq/8/8/8/8/8/8/7K w - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(51000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 6KQ/8/8/8/8/8/8/7k b - - 0 1', () => {
        board.ParseFen("6KQ/8/8/8/8/8/8/7k b - - 0 1");
        expect(board.material[0]).toBe(51000);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for K7/8/8/3Q4/4q3/8/8/7k w - - 0 1', () => {
        board.ParseFen("K7/8/8/3Q4/4q3/8/8/7k w - - 0 1");
        expect(board.material[0]).toBe(51000);
        expect(board.material[1]).toBe(51000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 6qk/8/8/8/8/8/8/7K b - - 0 1', () => {
        board.ParseFen("6qk/8/8/8/8/8/8/7K b - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(51000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 6KQ/8/8/8/8/8/8/7k b - - 0 1', () => {
        board.ParseFen("6KQ/8/8/8/8/8/8/7k b - - 0 1");
        expect(board.material[0]).toBe(51000);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for K7/8/8/3Q4/4q3/8/8/7k b - - 0 1', () => {
        board.ParseFen("K7/8/8/3Q4/4q3/8/8/7k b - - 0 1");
        expect(board.material[0]).toBe(51000);
        expect(board.material[1]).toBe(51000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/8/8/8/K7/P7/k7 w - - 0 1', () => {
        board.ParseFen("8/8/8/8/8/K7/P7/k7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/8/8/8/7K/7P/7k w - - 0 1', () => {
        board.ParseFen("8/8/8/8/8/7K/7P/7k w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for K7/p7/k7/8/8/8/8/8 w - - 0 1', () => {
        board.ParseFen("K7/p7/k7/8/8/8/8/8 w - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7K/7p/7k/8/8/8/8/8 w - - 0 1', () => {
        board.ParseFen("7K/7p/7k/8/8/8/8/8 w - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/2k1p3/3pP3/3P2K1/8/8/8/8 w - - 0 1', () => {
        board.ParseFen("8/2k1p3/3pP3/3P2K1/8/8/8/8 w - - 0 1");
        expect(board.material[0]).toBe(50200);
        expect(board.material[1]).toBe(50200);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/8/8/8/K7/P7/k7 b - - 0 1', () => {
        board.ParseFen("8/8/8/8/8/K7/P7/k7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/8/8/8/7K/7P/7k b - - 0 1', () => {
        board.ParseFen("8/8/8/8/8/7K/7P/7k b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for K7/p7/k7/8/8/8/8/8 b - - 0 1', () => {
        board.ParseFen("K7/p7/k7/8/8/8/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7K/7p/7k/8/8/8/8/8 b - - 0 1', () => {
        board.ParseFen("7K/7p/7k/8/8/8/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/2k1p3/3pP3/3P2K1/8/8/8/8 b - - 0 1', () => {
        board.ParseFen("8/2k1p3/3pP3/3P2K1/8/8/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50200);
        expect(board.material[1]).toBe(50200);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/8/8/8/4k3/4P3/4K3 w - - 0 1', () => {
        board.ParseFen("8/8/8/8/8/4k3/4P3/4K3 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50000);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 4k3/4p3/4K3/8/8/8/8/8 b - - 0 1', () => {
        board.ParseFen("4k3/4p3/4K3/8/8/8/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/7k/7p/7P/7K/8/8 w - - 0 1', () => {
        board.ParseFen("8/8/7k/7p/7P/7K/8/8 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/k7/p7/P7/K7/8/8 w - - 0 1', () => {
        board.ParseFen("8/8/k7/p7/P7/K7/8/8 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/3k4/3p4/3P4/3K4/8/8 w - - 0 1', () => {
        board.ParseFen("8/8/3k4/3p4/3P4/3K4/8/8 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/3k4/3p4/8/3P4/3K4/8/8 w - - 0 1', () => {
        board.ParseFen("8/3k4/3p4/8/3P4/3K4/8/8 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/3k4/3p4/8/3P4/3K4/8 w - - 0 1', () => {
        board.ParseFen("8/8/3k4/3p4/8/3P4/3K4/8 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/3p4/8/3P4/8/8/7K w - - 0 1', () => {
        board.ParseFen("k7/8/3p4/8/3P4/8/8/7K w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/7k/7p/7P/7K/8/8 b - - 0 1', () => {
        board.ParseFen("8/8/7k/7p/7P/7K/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/k7/p7/P7/K7/8/8 b - - 0 1', () => {
        board.ParseFen("8/8/k7/p7/P7/K7/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/3k4/3p4/3P4/3K4/8/8 b - - 0 1', () => {
        board.ParseFen("8/8/3k4/3p4/3P4/3K4/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/3k4/3p4/8/3P4/3K4/8/8 b - - 0 1', () => {
        board.ParseFen("8/3k4/3p4/8/3P4/3K4/8/8 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/8/3k4/3p4/8/3P4/3K4/8 b - - 0 1', () => {
        board.ParseFen("8/8/3k4/3p4/8/3P4/3K4/8 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/3p4/8/3P4/8/8/7K b - - 0 1', () => {
        board.ParseFen("k7/8/3p4/8/3P4/8/8/7K b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/3p4/8/8/3P4/8/8/K7 w - - 0 1', () => {
        board.ParseFen("7k/3p4/8/8/3P4/8/8/K7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/8/3p4/8/8/3P4/K7 w - - 0 1', () => {
        board.ParseFen("7k/8/8/3p4/8/8/3P4/K7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/8/7p/6P1/8/8/K7 w - - 0 1', () => {
        board.ParseFen("k7/8/8/7p/6P1/8/8/K7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/7p/8/8/6P1/8/K7 w - - 0 1', () => {
        board.ParseFen("k7/8/7p/8/8/6P1/8/K7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/8/6p1/7P/8/8/K7 w - - 0 1', () => {
        board.ParseFen("k7/8/8/6p1/7P/8/8/K7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/6p1/8/8/7P/8/K7 w - - 0 1', () => {
        board.ParseFen("k7/8/6p1/8/8/7P/8/K7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/8/3p4/4p3/8/8/7K w - - 0 1', () => {
        board.ParseFen("k7/8/8/3p4/4p3/8/8/7K w - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50200);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/3p4/8/8/4P3/8/7K w - - 0 1', () => {
        board.ParseFen("k7/8/3p4/8/8/4P3/8/7K w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/3p4/8/8/3P4/8/8/K7 b - - 0 1', () => {
        board.ParseFen("7k/3p4/8/8/3P4/8/8/K7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/8/3p4/8/8/3P4/K7 b - - 0 1', () => {
        board.ParseFen("7k/8/8/3p4/8/8/3P4/K7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/8/7p/6P1/8/8/K7 b - - 0 1', () => {
        board.ParseFen("k7/8/8/7p/6P1/8/8/K7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/7p/8/8/6P1/8/K7 b - - 0 1', () => {
        board.ParseFen("k7/8/7p/8/8/6P1/8/K7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/8/6p1/7P/8/8/K7 b - - 0 1', () => {
        board.ParseFen("k7/8/8/6p1/7P/8/8/K7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/6p1/8/8/7P/8/K7 b - - 0 1', () => {
        board.ParseFen("k7/8/6p1/8/8/7P/8/K7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/8/3p4/4p3/8/8/7K b - - 0 1', () => {
        board.ParseFen("k7/8/8/3p4/4p3/8/8/7K b - - 0 1");
        expect(board.material[0]).toBe(50000);
        expect(board.material[1]).toBe(50200);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/8/3p4/8/8/4P3/8/7K b - - 0 1', () => {
        board.ParseFen("k7/8/3p4/8/8/4P3/8/7K b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/8/p7/1P6/8/8/7K w - - 0 1', () => {
        board.ParseFen("7k/8/8/p7/1P6/8/8/7K w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/p7/8/8/1P6/8/7K w - - 0 1', () => {
        board.ParseFen("7k/8/p7/8/8/1P6/8/7K w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/8/1p6/P7/8/8/7K w - - 0 1', () => {
        board.ParseFen("7k/8/8/1p6/P7/8/8/7K w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/1p6/8/8/P7/8/7K w - - 0 1', () => {
        board.ParseFen("7k/8/1p6/8/8/P7/8/7K w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/7p/8/8/8/8/6P1/K7 w - - 0 1', () => {
        board.ParseFen("k7/7p/8/8/8/8/6P1/K7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/6p1/8/8/8/8/7P/K7 w - - 0 1', () => {
        board.ParseFen("k7/6p1/8/8/8/8/7P/K7 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 3k4/3pp3/8/8/8/8/3PP3/3K4 w - - 0 1', () => {
        board.ParseFen("3k4/3pp3/8/8/8/8/3PP3/3K4 w - - 0 1");
        expect(board.material[0]).toBe(50200);
        expect(board.material[1]).toBe(50200);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/8/p7/1P6/8/8/7K b - - 0 1', () => {
        board.ParseFen("7k/8/8/p7/1P6/8/8/7K b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/p7/8/8/1P6/8/7K b - - 0 1', () => {
        board.ParseFen("7k/8/p7/8/8/1P6/8/7K b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/8/1p6/P7/8/8/7K b - - 0 1', () => {
        board.ParseFen("7k/8/8/1p6/P7/8/8/7K b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 7k/8/1p6/8/8/P7/8/7K b - - 0 1', () => {
        board.ParseFen("7k/8/1p6/8/8/P7/8/7K b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/7p/8/8/8/8/6P1/K7 b - - 0 1', () => {
        board.ParseFen("k7/7p/8/8/8/8/6P1/K7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for k7/6p1/8/8/8/8/7P/K7 b - - 0 1', () => {
        board.ParseFen("k7/6p1/8/8/8/8/7P/K7 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 3k4/3pp3/8/8/8/8/3PP3/3K4 b - - 0 1', () => {
        board.ParseFen("3k4/3pp3/8/8/8/8/3PP3/3K4 b - - 0 1");
        expect(board.material[0]).toBe(50200);
        expect(board.material[1]).toBe(50200);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/Pk6/8/8/8/8/6Kp/8 w - - 0 1', () => {
        board.ParseFen("8/Pk6/8/8/8/8/6Kp/8 w - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for n1n5/1Pk5/8/8/8/8/5Kp1/5N1N w - - 0 1', () => {
        board.ParseFen("n1n5/1Pk5/8/8/8/8/5Kp1/5N1N w - - 0 1");
        expect(board.material[0]).toBe(50750);
        expect(board.material[1]).toBe(50750);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/PPPk4/8/8/8/8/4Kppp/8 w - - 0 1', () => {
        board.ParseFen("8/PPPk4/8/8/8/8/4Kppp/8 w - - 0 1");
        expect(board.material[0]).toBe(50300);
        expect(board.material[1]).toBe(50300);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for n1n5/PPPk4/8/8/8/8/4Kppp/5N1N w - - 0 1', () => {
        board.ParseFen("n1n5/PPPk4/8/8/8/8/4Kppp/5N1N w - - 0 1");
        expect(board.material[0]).toBe(50950);
        expect(board.material[1]).toBe(50950);
        expect(board.side).toBe(0);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/Pk6/8/8/8/8/6Kp/8 b - - 0 1', () => {
        board.ParseFen("8/Pk6/8/8/8/8/6Kp/8 b - - 0 1");
        expect(board.material[0]).toBe(50100);
        expect(board.material[1]).toBe(50100);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for n1n5/1Pk5/8/8/8/8/5Kp1/5N1N b - - 0 1', () => {
        board.ParseFen("n1n5/1Pk5/8/8/8/8/5Kp1/5N1N b - - 0 1");
        expect(board.material[0]).toBe(50750);
        expect(board.material[1]).toBe(50750);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for 8/PPPk4/8/8/8/8/4Kppp/8 b - - 0 1', () => {
        board.ParseFen("8/PPPk4/8/8/8/8/4Kppp/8 b - - 0 1");
        expect(board.material[0]).toBe(50300);
        expect(board.material[1]).toBe(50300);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
    test('Testing board for n1n5/PPPk4/8/8/8/8/4Kppp/5N1N b - - 0 1', () => {
        board.ParseFen("n1n5/PPPk4/8/8/8/8/4Kppp/5N1N b - - 0 1");
        expect(board.material[0]).toBe(50950);
        expect(board.material[1]).toBe(50950);
        expect(board.side).toBe(1);
        expect(board.castlePermission).toBe(0);
    });
});