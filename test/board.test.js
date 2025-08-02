const { GameBoard, ParseFen, IsSquareOffBoard } = require("../src/board");
const { COLOURS, PIECES, SQUARES, BOOL} = require("../src/defs");

// supress console.log
const consoleLog = console.log;
console.log = jest.fn();

describe("Board Properties", () => {
    test('GameBoard.pieces.length should result in 120', () => {
        expect(GameBoard.pieces.length).toBe(120);
    });
});

describe("ParseFEN with starting FEN string", () => {
    ParseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    test('GameBoard.enPassant to be 99', () => {
        expect(GameBoard.enPassant).toBe(99);
    });
    test('GameBoard.side to be COLOURS.WHITE', () => {
        expect(GameBoard.side).toBe(COLOURS.WHITE);
    })
    test('GameBoard.castlePermission to be 15', () => {
        expect(GameBoard.castlePermission).toBe(15);
    });
    test('GameBoard.pieceList[21] to be PIECES.wR', () => {
        expect(GameBoard.pieces[21]).toBe(PIECES.wR);
    });
    test('GameBoard.pieceList[22] to be PIECES.wN', () => {
        expect(GameBoard.pieces[22]).toBe(PIECES.wN);
    });
    test('GameBoard.pieceList[23] to be PIECES.wB', () => {
        expect(GameBoard.pieces[23]).toBe(PIECES.wB);
    });
    test('GameBoard.pieceList[24] to be PIECES.wQ', () => {
        expect(GameBoard.pieces[24]).toBe(PIECES.wQ);
    });
    test('GameBoard.pieceList[25] to be PIECES.wK', () => {
        expect(GameBoard.pieces[25]).toBe(PIECES.wK);
    });
    test('GameBoard.pieceList[26] to be PIECES.wB', () => {
        expect(GameBoard.pieces[26]).toBe(PIECES.wB);
    });
    test('GameBoard.pieceList[27] to be PIECES.wN', () => {
        expect(GameBoard.pieces[27]).toBe(PIECES.wN);
    });
    test('GameBoard.pieceList[28] to be PIECES.wR', () => {
        expect(GameBoard.pieces[28]).toBe(PIECES.wR);
    });
    test('GameBoard.pieceList[31] to be PIECES.wP', () => {
        expect(GameBoard.pieces[31]).toBe(PIECES.wP);
    });
    test('GameBoard.pieceList[32] to be PIECES.wP', () => {
        expect(GameBoard.pieces[32]).toBe(PIECES.wP);
    });
    test('GameBoard.pieceList[33] to be PIECES.wP', () => {
        expect(GameBoard.pieces[33]).toBe(PIECES.wP);
    });
    test('GameBoard.pieceList[34] to be PIECES.wP', () => {
        expect(GameBoard.pieces[34]).toBe(PIECES.wP);
    });
    test('GameBoard.pieceList[35] to be PIECES.wP', () => {
        expect(GameBoard.pieces[35]).toBe(PIECES.wP);
    });
    test('GameBoard.pieceList[36] to be PIECES.wP', () => {
        expect(GameBoard.pieces[36]).toBe(PIECES.wP);
    });
    test('GameBoard.pieceList[37] to be PIECES.wP', () => {
        expect(GameBoard.pieces[37]).toBe(PIECES.wP);
    });
    test('GameBoard.pieceList[38] to be PIECES.wP', () => {
        expect(GameBoard.pieces[38]).toBe(PIECES.wP);
    });
    test('GameBoard.pieceList[41] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[41]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[42] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[42]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[43] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[43]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[44] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[44]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[45] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[45]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[46] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[46]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[47] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[47]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[48] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[48]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[51] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[51]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[52] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[52]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[53] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[53]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[54] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[54]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[55] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[55]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[56] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[56]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[57] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[57]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[58] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[58]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[61] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[61]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[62] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[62]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[63] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[63]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[64] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[64]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[65] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[65]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[66] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[66]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[67] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[67]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[68] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[68]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[71] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[71]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[72] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[72]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[73] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[73]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[74] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[74]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[75] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[75]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[76] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[76]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[77] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[77]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[78] to be PIECES.EMPTY', () => {
        expect(GameBoard.pieces[78]).toBe(PIECES.EMPTY);
    });
    test('GameBoard.pieceList[81] to be PIECES.bP', () => {
        expect(GameBoard.pieces[81]).toBe(PIECES.bP);
    });
    test('GameBoard.pieceList[82] to be PIECES.bP', () => {
        expect(GameBoard.pieces[82]).toBe(PIECES.bP);
    });
    test('GameBoard.pieceList[83] to be PIECES.bP', () => {
        expect(GameBoard.pieces[83]).toBe(PIECES.bP);
    });
    test('GameBoard.pieceList[84] to be PIECES.bP', () => {
        expect(GameBoard.pieces[84]).toBe(PIECES.bP);
    });
    test('GameBoard.pieceList[85] to be PIECES.bP', () => {
        expect(GameBoard.pieces[85]).toBe(PIECES.bP);
    });
    test('GameBoard.pieceList[86] to be PIECES.bP', () => {
        expect(GameBoard.pieces[86]).toBe(PIECES.bP);
    });
    test('GameBoard.pieceList[87] to be PIECES.bP', () => {
        expect(GameBoard.pieces[87]).toBe(PIECES.bP);
    });
    test('GameBoard.pieceList[88] to be PIECES.bP', () => {
        expect(GameBoard.pieces[88]).toBe(PIECES.bP);
    });
    test('GameBoard.pieceList[91] to be PIECES.bR', () => {
        expect(GameBoard.pieces[91]).toBe(PIECES.bR);
    });
    test('GameBoard.pieceList[92] to be PIECES.bN', () => {
        expect(GameBoard.pieces[92]).toBe(PIECES.bN);
    });
    test('GameBoard.pieceList[93] to be PIECES.bB', () => {
        expect(GameBoard.pieces[93]).toBe(PIECES.bB);
    });
    test('GameBoard.pieceList[94] to be PIECES.bQ', () => {
        expect(GameBoard.pieces[94]).toBe(PIECES.bQ);
    });
    test('GameBoard.pieceList[95] to be PIECES.bK', () => {
        expect(GameBoard.pieces[95]).toBe(PIECES.bK);
    });
    test('GameBoard.pieceList[96] to be PIECES.bB', () => {
        expect(GameBoard.pieces[96]).toBe(PIECES.bB);
    });
    test('GameBoard.pieceList[97] to be PIECES.bN', () => {
        expect(GameBoard.pieces[97]).toBe(PIECES.bN);
    });
    test('GameBoard.pieceList[98] to be PIECES.bR', () => {
        expect(GameBoard.pieces[98]).toBe(PIECES.bR);
    });
    test('GameBoard.pieceList[0] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[0]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[1] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[1]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[2] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[2]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[3] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[3]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[4] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[4]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[5] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[5]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[6] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[6]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[7] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[7]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[8] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[8]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[9] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[9]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[10] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[10]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[11] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[11]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[12] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[12]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[13] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[13]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[14] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[14]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[15] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[15]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[16] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[16]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[17] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[17]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[18] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[18]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[19] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[19]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[20] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[20]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[30] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[30]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[40] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[40]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[50] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[50]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[60] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[60]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[70] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[70]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[80] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[80]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[90] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[90]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[29] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[29]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[39] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[39]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[49] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[49]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[59] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[59]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[69] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[69]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[79] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[79]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[89] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[89]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[99] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[99]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[100] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[100]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[101] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[101]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[102] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[102]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[103] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[103]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[104] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[104]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[105] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[105]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[106] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[106]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[107] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[107]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[108] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[108]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[109] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[109]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[110] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[110]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[111] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[111]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[112] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[112]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[113] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[113]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[114] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[114]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[115] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[115]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[116] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[116]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[117] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[117]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[118] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[118]).toBe(SQUARES.OFFBOARD);
    });
    test('GameBoard.pieceList[119] to be SQUARES.OFFBOARD', () => {
        expect(GameBoard.pieces[119]).toBe(SQUARES.OFFBOARD);
    });
});

describe("IsSquareOffBoard function", () =>{
    test('IsSquareOffBoard(0) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(0)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(1) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(1)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(2) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(2)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(3) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(3)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(4) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(4)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(5) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(5)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(6) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(6)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(7) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(7)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(8) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(8)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(9) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(9)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(10) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(10)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(11) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(11)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(12) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(12)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(13) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(13)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(14) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(14)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(15) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(15)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(16) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(16)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(17) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(17)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(18) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(18)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(19) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(19)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(20) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(20)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(21) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(21)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(22) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(22)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(23) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(23)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(24) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(24)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(25) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(25)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(26) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(26)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(27) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(27)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(28) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(28)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(29) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(29)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(30) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(30)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(31) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(31)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(32) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(32)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(33) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(33)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(34) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(34)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(35) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(35)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(36) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(36)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(37) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(37)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(38) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(38)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(39) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(39)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(40) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(40)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(41) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(41)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(42) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(42)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(43) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(43)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(44) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(44)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(45) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(45)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(46) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(46)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(47) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(47)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(48) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(48)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(49) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(49)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(50) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(50)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(51) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(51)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(52) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(52)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(53) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(53)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(54) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(54)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(55) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(55)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(56) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(56)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(57) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(57)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(58) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(58)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(59) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(59)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(60) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(60)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(61) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(61)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(62) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(62)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(63) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(63)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(64) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(64)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(65) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(65)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(66) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(66)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(67) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(67)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(68) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(68)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(69) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(69)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(70) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(70)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(71) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(71)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(72) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(72)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(73) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(73)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(74) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(74)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(75) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(75)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(76) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(76)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(77) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(77)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(78) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(78)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(79) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(79)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(80) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(80)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(81) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(81)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(82) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(82)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(83) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(83)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(84) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(84)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(85) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(85)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(86) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(86)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(87) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(87)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(88) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(88)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(89) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(89)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(90) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(90)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(91) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(91)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(92) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(92)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(93) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(93)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(94) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(94)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(95) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(95)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(96) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(96)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(97) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(97)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(98) should result in BOOL.FALSE', () => {
        expect(IsSquareOffBoard(98)).toBe(BOOL.FALSE);
    });
    test('IsSquareOffBoard(99) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(99)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(100) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(100)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(101) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(101)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(102) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(102)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(103) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(103)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(104) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(104)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(105) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(105)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(106) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(106)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(107) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(107)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(108) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(108)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(109) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(109)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(110) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(110)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(111) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(111)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(112) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(112)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(113) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(113)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(114) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(114)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(115) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(115)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(116) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(116)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(117) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(117)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(118) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(118)).toBe(BOOL.TRUE);
    });
    test('IsSquareOffBoard(119) should result in BOOL.TRUE', () => {
        expect(IsSquareOffBoard(119)).toBe(BOOL.TRUE);
    });
});
