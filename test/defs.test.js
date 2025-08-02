import {PIECES, 
    InitFilesRanksBoard, FilesBoard, RanksBoard, 
    InitSquare120ToSquare64, Square120ToSquare64, Square64ToSquare120,
    FileRankToSquare, FILES, RANKS} from "../src/defs";

InitFilesRanksBoard()
InitSquare120ToSquare64()

describe("PIECE values", () =>{
    test('PIECES.EMPTY should result in 0', () => {
        expect(PIECES.EMPTY).toBe(0)
    });
    test('PIECES.wP should result in 1', () => {
        expect(PIECES.wP).toBe(1)
    });
    test('PIECES.wN should result in 2', () => {
        expect(PIECES.wN).toBe(2)
    });
    test('PIECES.wB should result in 3', () => {
        expect(PIECES.wB).toBe(3)
    });
    test('PIECES.wR should result in 4', () => {
        expect(PIECES.wR).toBe(4)
    });
    test('PIECES.wQ should result in 5', () => {
        expect(PIECES.wQ).toBe(5)
    });
    test('PIECES.wK should result in 6', () => {
        expect(PIECES.wK).toBe(6)
    });
    test('PIECES.bP should result in 7', () => {
        expect(PIECES.bP).toBe(7)
    });
    test('PIECES.bN should result in 8', () => {
        expect(PIECES.bN).toBe(8)
    });
    test('PIECES.bB should result in 9', () => {
        expect(PIECES.bB).toBe(9)
    });
    test('PIECES.bR should result in 10', () => {
        expect(PIECES.bR).toBe(10)
    });
    test('PIECES.bQ should result in 11', () => {
        expect(PIECES.bQ).toBe(11)
    });
    test('PIECES.bK should result in 12', () => {
        expect(PIECES.bK).toBe(12)
    });
});

describe("FilesBoard Values", () => {
    test('FilesBoard[0] should result in 100', () => {
        expect(FilesBoard[0]).toBe(100)
    });
    test('FilesBoard[1] should result in 100', () => {
        expect(FilesBoard[1]).toBe(100)
    });
    test('FilesBoard[2] should result in 100', () => {
        expect(FilesBoard[2]).toBe(100)
    });
    test('FilesBoard[3] should result in 100', () => {
        expect(FilesBoard[3]).toBe(100)
    });
    test('FilesBoard[4] should result in 100', () => {
        expect(FilesBoard[4]).toBe(100)
    });
    test('FilesBoard[5] should result in 100', () => {
        expect(FilesBoard[5]).toBe(100)
    });
    test('FilesBoard[6] should result in 100', () => {
        expect(FilesBoard[6]).toBe(100)
    });
    test('FilesBoard[7] should result in 100', () => {
        expect(FilesBoard[7]).toBe(100)
    });
    test('FilesBoard[8] should result in 100', () => {
        expect(FilesBoard[8]).toBe(100)
    });
    test('FilesBoard[9] should result in 100', () => {
        expect(FilesBoard[9]).toBe(100)
    });
    test('FilesBoard[10] should result in 100', () => {
        expect(FilesBoard[10]).toBe(100)
    });
    test('FilesBoard[11] should result in 100', () => {
        expect(FilesBoard[11]).toBe(100)
    });
    test('FilesBoard[12] should result in 100', () => {
        expect(FilesBoard[12]).toBe(100)
    });
    test('FilesBoard[13] should result in 100', () => {
        expect(FilesBoard[13]).toBe(100)
    });
    test('FilesBoard[14] should result in 100', () => {
        expect(FilesBoard[14]).toBe(100)
    });
    test('FilesBoard[15] should result in 100', () => {
        expect(FilesBoard[15]).toBe(100)
    });
    test('FilesBoard[16] should result in 100', () => {
        expect(FilesBoard[16]).toBe(100)
    });
    test('FilesBoard[17] should result in 100', () => {
        expect(FilesBoard[17]).toBe(100)
    });
    test('FilesBoard[18] should result in 100', () => {
        expect(FilesBoard[18]).toBe(100)
    });
    test('FilesBoard[19] should result in 100', () => {
        expect(FilesBoard[19]).toBe(100)
    });
    test('FilesBoard[20] should result in 100', () => {
        expect(FilesBoard[20]).toBe(100)
    });
    test('FilesBoard[21] should result in 0', () => {
        expect(FilesBoard[21]).toBe(0)
    });
    test('FilesBoard[22] should result in 1', () => {
        expect(FilesBoard[22]).toBe(1)
    });
    test('FilesBoard[23] should result in 2', () => {
        expect(FilesBoard[23]).toBe(2)
    });
    test('FilesBoard[24] should result in 3', () => {
        expect(FilesBoard[24]).toBe(3)
    });
    test('FilesBoard[25] should result in 4', () => {
        expect(FilesBoard[25]).toBe(4)
    });
    test('FilesBoard[26] should result in 5', () => {
        expect(FilesBoard[26]).toBe(5)
    });
    test('FilesBoard[27] should result in 6', () => {
        expect(FilesBoard[27]).toBe(6)
    });
    test('FilesBoard[28] should result in 7', () => {
        expect(FilesBoard[28]).toBe(7)
    });
    test('FilesBoard[29] should result in 100', () => {
        expect(FilesBoard[29]).toBe(100)
    });
    test('FilesBoard[30] should result in 100', () => {
        expect(FilesBoard[30]).toBe(100)
    });
    test('FilesBoard[31] should result in 0', () => {
        expect(FilesBoard[31]).toBe(0)
    });
    test('FilesBoard[32] should result in 1', () => {
        expect(FilesBoard[32]).toBe(1)
    });
    test('FilesBoard[33] should result in 2', () => {
        expect(FilesBoard[33]).toBe(2)
    });
    test('FilesBoard[34] should result in 3', () => {
        expect(FilesBoard[34]).toBe(3)
    });
    test('FilesBoard[35] should result in 4', () => {
        expect(FilesBoard[35]).toBe(4)
    });
    test('FilesBoard[36] should result in 5', () => {
        expect(FilesBoard[36]).toBe(5)
    });
    test('FilesBoard[37] should result in 6', () => {
        expect(FilesBoard[37]).toBe(6)
    });
    test('FilesBoard[38] should result in 7', () => {
        expect(FilesBoard[38]).toBe(7)
    });
    test('FilesBoard[39] should result in 100', () => {
        expect(FilesBoard[39]).toBe(100)
    });
    test('FilesBoard[40] should result in 100', () => {
        expect(FilesBoard[40]).toBe(100)
    });
    test('FilesBoard[41] should result in 0', () => {
        expect(FilesBoard[41]).toBe(0)
    });
    test('FilesBoard[42] should result in 1', () => {
        expect(FilesBoard[42]).toBe(1)
    });
    test('FilesBoard[43] should result in 2', () => {
        expect(FilesBoard[43]).toBe(2)
    });
    test('FilesBoard[44] should result in 3', () => {
        expect(FilesBoard[44]).toBe(3)
    });
    test('FilesBoard[45] should result in 4', () => {
        expect(FilesBoard[45]).toBe(4)
    });
    test('FilesBoard[46] should result in 5', () => {
        expect(FilesBoard[46]).toBe(5)
    });
    test('FilesBoard[47] should result in 6', () => {
        expect(FilesBoard[47]).toBe(6)
    });
    test('FilesBoard[48] should result in 7', () => {
        expect(FilesBoard[48]).toBe(7)
    });
    test('FilesBoard[49] should result in 100', () => {
        expect(FilesBoard[49]).toBe(100)
    });
    test('FilesBoard[50] should result in 100', () => {
        expect(FilesBoard[50]).toBe(100)
    });
    test('FilesBoard[51] should result in 0', () => {
        expect(FilesBoard[51]).toBe(0)
    });
    test('FilesBoard[52] should result in 1', () => {
        expect(FilesBoard[52]).toBe(1)
    });
    test('FilesBoard[53] should result in 2', () => {
        expect(FilesBoard[53]).toBe(2)
    });
    test('FilesBoard[54] should result in 3', () => {
        expect(FilesBoard[54]).toBe(3)
    });
    test('FilesBoard[55] should result in 4', () => {
        expect(FilesBoard[55]).toBe(4)
    });
    test('FilesBoard[56] should result in 5', () => {
        expect(FilesBoard[56]).toBe(5)
    });
    test('FilesBoard[57] should result in 6', () => {
        expect(FilesBoard[57]).toBe(6)
    });
    test('FilesBoard[58] should result in 7', () => {
        expect(FilesBoard[58]).toBe(7)
    });
    test('FilesBoard[59] should result in 100', () => {
        expect(FilesBoard[59]).toBe(100)
    });
    test('FilesBoard[60] should result in 100', () => {
        expect(FilesBoard[60]).toBe(100)
    });
    test('FilesBoard[61] should result in 0', () => {
        expect(FilesBoard[61]).toBe(0)
    });
    test('FilesBoard[62] should result in 1', () => {
        expect(FilesBoard[62]).toBe(1)
    });
    test('FilesBoard[63] should result in 2', () => {
        expect(FilesBoard[63]).toBe(2)
    });
    test('FilesBoard[64] should result in 3', () => {
        expect(FilesBoard[64]).toBe(3)
    });
    test('FilesBoard[65] should result in 4', () => {
        expect(FilesBoard[65]).toBe(4)
    });
    test('FilesBoard[66] should result in 5', () => {
        expect(FilesBoard[66]).toBe(5)
    });
    test('FilesBoard[67] should result in 6', () => {
        expect(FilesBoard[67]).toBe(6)
    });
    test('FilesBoard[68] should result in 7', () => {
        expect(FilesBoard[68]).toBe(7)
    });
    test('FilesBoard[69] should result in 100', () => {
        expect(FilesBoard[69]).toBe(100)
    });
    test('FilesBoard[70] should result in 100', () => {
        expect(FilesBoard[70]).toBe(100)
    });
    test('FilesBoard[71] should result in 0', () => {
        expect(FilesBoard[71]).toBe(0)
    });
    test('FilesBoard[72] should result in 1', () => {
        expect(FilesBoard[72]).toBe(1)
    });
    test('FilesBoard[73] should result in 2', () => {
        expect(FilesBoard[73]).toBe(2)
    });
    test('FilesBoard[74] should result in 3', () => {
        expect(FilesBoard[74]).toBe(3)
    });
    test('FilesBoard[75] should result in 4', () => {
        expect(FilesBoard[75]).toBe(4)
    });
    test('FilesBoard[76] should result in 5', () => {
        expect(FilesBoard[76]).toBe(5)
    });
    test('FilesBoard[77] should result in 6', () => {
        expect(FilesBoard[77]).toBe(6)
    });
    test('FilesBoard[78] should result in 7', () => {
        expect(FilesBoard[78]).toBe(7)
    });
    test('FilesBoard[79] should result in 100', () => {
        expect(FilesBoard[79]).toBe(100)
    });
    test('FilesBoard[80] should result in 100', () => {
        expect(FilesBoard[80]).toBe(100)
    });
    test('FilesBoard[81] should result in 0', () => {
        expect(FilesBoard[81]).toBe(0)
    });
    test('FilesBoard[82] should result in 1', () => {
        expect(FilesBoard[82]).toBe(1)
    });
    test('FilesBoard[83] should result in 2', () => {
        expect(FilesBoard[83]).toBe(2)
    });
    test('FilesBoard[84] should result in 3', () => {
        expect(FilesBoard[84]).toBe(3)
    });
    test('FilesBoard[85] should result in 4', () => {
        expect(FilesBoard[85]).toBe(4)
    });
    test('FilesBoard[86] should result in 5', () => {
        expect(FilesBoard[86]).toBe(5)
    });
    test('FilesBoard[87] should result in 6', () => {
        expect(FilesBoard[87]).toBe(6)
    });
    test('FilesBoard[88] should result in 7', () => {
        expect(FilesBoard[88]).toBe(7)
    });
    test('FilesBoard[89] should result in 100', () => {
        expect(FilesBoard[89]).toBe(100)
    });
    test('FilesBoard[90] should result in 100', () => {
        expect(FilesBoard[90]).toBe(100)
    });
    test('FilesBoard[91] should result in 0', () => {
        expect(FilesBoard[91]).toBe(0)
    });
    test('FilesBoard[92] should result in 1', () => {
        expect(FilesBoard[92]).toBe(1)
    });
    test('FilesBoard[93] should result in 2', () => {
        expect(FilesBoard[93]).toBe(2)
    });
    test('FilesBoard[94] should result in 3', () => {
        expect(FilesBoard[94]).toBe(3)
    });
    test('FilesBoard[95] should result in 4', () => {
        expect(FilesBoard[95]).toBe(4)
    });
    test('FilesBoard[96] should result in 5', () => {
        expect(FilesBoard[96]).toBe(5)
    });
    test('FilesBoard[97] should result in 6', () => {
        expect(FilesBoard[97]).toBe(6)
    });
    test('FilesBoard[98] should result in 7', () => {
        expect(FilesBoard[98]).toBe(7)
    });
    test('FilesBoard[99] should result in 100', () => {
        expect(FilesBoard[99]).toBe(100)
    });
    test('FilesBoard[100] should result in 100', () => {
        expect(FilesBoard[100]).toBe(100)
    });
    test('FilesBoard[101] should result in 100', () => {
        expect(FilesBoard[101]).toBe(100)
    });
    test('FilesBoard[102] should result in 100', () => {
        expect(FilesBoard[102]).toBe(100)
    });
    test('FilesBoard[103] should result in 100', () => {
        expect(FilesBoard[103]).toBe(100)
    });
    test('FilesBoard[104] should result in 100', () => {
        expect(FilesBoard[104]).toBe(100)
    });
    test('FilesBoard[105] should result in 100', () => {
        expect(FilesBoard[105]).toBe(100)
    });
    test('FilesBoard[106] should result in 100', () => {
        expect(FilesBoard[106]).toBe(100)
    });
    test('FilesBoard[107] should result in 100', () => {
        expect(FilesBoard[107]).toBe(100)
    });
    test('FilesBoard[108] should result in 100', () => {
        expect(FilesBoard[108]).toBe(100)
    });
    test('FilesBoard[109] should result in 100', () => {
        expect(FilesBoard[109]).toBe(100)
    });
    test('FilesBoard[110] should result in 100', () => {
        expect(FilesBoard[110]).toBe(100)
    });
    test('FilesBoard[111] should result in 100', () => {
        expect(FilesBoard[111]).toBe(100)
    });
    test('FilesBoard[112] should result in 100', () => {
        expect(FilesBoard[112]).toBe(100)
    });
    test('FilesBoard[113] should result in 100', () => {
        expect(FilesBoard[113]).toBe(100)
    });
    test('FilesBoard[114] should result in 100', () => {
        expect(FilesBoard[114]).toBe(100)
    });
    test('FilesBoard[115] should result in 100', () => {
        expect(FilesBoard[115]).toBe(100)
    });
    test('FilesBoard[116] should result in 100', () => {
        expect(FilesBoard[116]).toBe(100)
    });
    test('FilesBoard[117] should result in 100', () => {
        expect(FilesBoard[117]).toBe(100)
    });
    test('FilesBoard[118] should result in 100', () => {
        expect(FilesBoard[118]).toBe(100)
    });
    test('FilesBoard[119] should result in 100', () => {
        expect(FilesBoard[119]).toBe(100)
    });
});

describe("RanksBoard, values", () => {
    test('RanksBoard[0] should result in 100', () => {
        expect(RanksBoard[0]).toBe(100)
    });
    test('RanksBoard[1] should result in 100', () => {
        expect(RanksBoard[1]).toBe(100)
    });
    test('RanksBoard[2] should result in 100', () => {
        expect(RanksBoard[2]).toBe(100)
    });
    test('RanksBoard[3] should result in 100', () => {
        expect(RanksBoard[3]).toBe(100)
    });
    test('RanksBoard[4] should result in 100', () => {
        expect(RanksBoard[4]).toBe(100)
    });
    test('RanksBoard[5] should result in 100', () => {
        expect(RanksBoard[5]).toBe(100)
    });
    test('RanksBoard[6] should result in 100', () => {
        expect(RanksBoard[6]).toBe(100)
    });
    test('RanksBoard[7] should result in 100', () => {
        expect(RanksBoard[7]).toBe(100)
    });
    test('RanksBoard[8] should result in 100', () => {
        expect(RanksBoard[8]).toBe(100)
    });
    test('RanksBoard[9] should result in 100', () => {
        expect(RanksBoard[9]).toBe(100)
    });
    test('RanksBoard[10] should result in 100', () => {
        expect(RanksBoard[10]).toBe(100)
    });
    test('RanksBoard[11] should result in 100', () => {
        expect(RanksBoard[11]).toBe(100)
    });
    test('RanksBoard[12] should result in 100', () => {
        expect(RanksBoard[12]).toBe(100)
    });
    test('RanksBoard[13] should result in 100', () => {
        expect(RanksBoard[13]).toBe(100)
    });
    test('RanksBoard[14] should result in 100', () => {
        expect(RanksBoard[14]).toBe(100)
    });
    test('RanksBoard[15] should result in 100', () => {
        expect(RanksBoard[15]).toBe(100)
    });
    test('RanksBoard[16] should result in 100', () => {
        expect(RanksBoard[16]).toBe(100)
    });
    test('RanksBoard[17] should result in 100', () => {
        expect(RanksBoard[17]).toBe(100)
    });
    test('RanksBoard[18] should result in 100', () => {
        expect(RanksBoard[18]).toBe(100)
    });
    test('RanksBoard[19] should result in 100', () => {
        expect(RanksBoard[19]).toBe(100)
    });
    test('RanksBoard[20] should result in 100', () => {
        expect(RanksBoard[20]).toBe(100)
    });
    test('RanksBoard[21] should result in 0', () => {
        expect(RanksBoard[21]).toBe(0)
    });
    test('RanksBoard[22] should result in 0', () => {
        expect(RanksBoard[22]).toBe(0)
    });
    test('RanksBoard[23] should result in 0', () => {
        expect(RanksBoard[23]).toBe(0)
    });
    test('RanksBoard[24] should result in 0', () => {
        expect(RanksBoard[24]).toBe(0)
    });
    test('RanksBoard[25] should result in 0', () => {
        expect(RanksBoard[25]).toBe(0)
    });
    test('RanksBoard[26] should result in 0', () => {
        expect(RanksBoard[26]).toBe(0)
    });
    test('RanksBoard[27] should result in 0', () => {
        expect(RanksBoard[27]).toBe(0)
    });
    test('RanksBoard[28] should result in 0', () => {
        expect(RanksBoard[28]).toBe(0)
    });
    test('RanksBoard[29] should result in 100', () => {
        expect(RanksBoard[29]).toBe(100)
    });
    test('RanksBoard[30] should result in 100', () => {
        expect(RanksBoard[30]).toBe(100)
    });
    test('RanksBoard[31] should result in 1', () => {
        expect(RanksBoard[31]).toBe(1)
    });
    test('RanksBoard[32] should result in 1', () => {
        expect(RanksBoard[32]).toBe(1)
    });
    test('RanksBoard[33] should result in 1', () => {
        expect(RanksBoard[33]).toBe(1)
    });
    test('RanksBoard[34] should result in 1', () => {
        expect(RanksBoard[34]).toBe(1)
    });
    test('RanksBoard[35] should result in 1', () => {
        expect(RanksBoard[35]).toBe(1)
    });
    test('RanksBoard[36] should result in 1', () => {
        expect(RanksBoard[36]).toBe(1)
    });
    test('RanksBoard[37] should result in 1', () => {
        expect(RanksBoard[37]).toBe(1)
    });
    test('RanksBoard[38] should result in 1', () => {
        expect(RanksBoard[38]).toBe(1)
    });
    test('RanksBoard[39] should result in 100', () => {
        expect(RanksBoard[39]).toBe(100)
    });
    test('RanksBoard[40] should result in 100', () => {
        expect(RanksBoard[40]).toBe(100)
    });
    test('RanksBoard[41] should result in 2', () => {
        expect(RanksBoard[41]).toBe(2)
    });
    test('RanksBoard[42] should result in 2', () => {
        expect(RanksBoard[42]).toBe(2)
    });
    test('RanksBoard[43] should result in 2', () => {
        expect(RanksBoard[43]).toBe(2)
    });
    test('RanksBoard[44] should result in 2', () => {
        expect(RanksBoard[44]).toBe(2)
    });
    test('RanksBoard[45] should result in 2', () => {
        expect(RanksBoard[45]).toBe(2)
    });
    test('RanksBoard[46] should result in 2', () => {
        expect(RanksBoard[46]).toBe(2)
    });
    test('RanksBoard[47] should result in 2', () => {
        expect(RanksBoard[47]).toBe(2)
    });
    test('RanksBoard[48] should result in 2', () => {
        expect(RanksBoard[48]).toBe(2)
    });
    test('RanksBoard[49] should result in 100', () => {
        expect(RanksBoard[49]).toBe(100)
    });
    test('RanksBoard[50] should result in 100', () => {
        expect(RanksBoard[50]).toBe(100)
    });
    test('RanksBoard[51] should result in 3', () => {
        expect(RanksBoard[51]).toBe(3)
    });
    test('RanksBoard[52] should result in 3', () => {
        expect(RanksBoard[52]).toBe(3)
    });
    test('RanksBoard[53] should result in 3', () => {
        expect(RanksBoard[53]).toBe(3)
    });
    test('RanksBoard[54] should result in 3', () => {
        expect(RanksBoard[54]).toBe(3)
    });
    test('RanksBoard[55] should result in 3', () => {
        expect(RanksBoard[55]).toBe(3)
    });
    test('RanksBoard[56] should result in 3', () => {
        expect(RanksBoard[56]).toBe(3)
    });
    test('RanksBoard[57] should result in 3', () => {
        expect(RanksBoard[57]).toBe(3)
    });
    test('RanksBoard[58] should result in 3', () => {
        expect(RanksBoard[58]).toBe(3)
    });
    test('RanksBoard[59] should result in 100', () => {
        expect(RanksBoard[59]).toBe(100)
    });
    test('RanksBoard[60] should result in 100', () => {
        expect(RanksBoard[60]).toBe(100)
    });
    test('RanksBoard[61] should result in 4', () => {
        expect(RanksBoard[61]).toBe(4)
    });
    test('RanksBoard[62] should result in 4', () => {
        expect(RanksBoard[62]).toBe(4)
    });
    test('RanksBoard[63] should result in 4', () => {
        expect(RanksBoard[63]).toBe(4)
    });
    test('RanksBoard[64] should result in 4', () => {
        expect(RanksBoard[64]).toBe(4)
    });
    test('RanksBoard[65] should result in 4', () => {
        expect(RanksBoard[65]).toBe(4)
    });
    test('RanksBoard[66] should result in 4', () => {
        expect(RanksBoard[66]).toBe(4)
    });
    test('RanksBoard[67] should result in 4', () => {
        expect(RanksBoard[67]).toBe(4)
    });
    test('RanksBoard[68] should result in 4', () => {
        expect(RanksBoard[68]).toBe(4)
    });
    test('RanksBoard[69] should result in 100', () => {
        expect(RanksBoard[69]).toBe(100)
    });
    test('RanksBoard[70] should result in 100', () => {
        expect(RanksBoard[70]).toBe(100)
    });
    test('RanksBoard[71] should result in 5', () => {
        expect(RanksBoard[71]).toBe(5)
    });
    test('RanksBoard[72] should result in 5', () => {
        expect(RanksBoard[72]).toBe(5)
    });
    test('RanksBoard[73] should result in 5', () => {
        expect(RanksBoard[73]).toBe(5)
    });
    test('RanksBoard[74] should result in 5', () => {
        expect(RanksBoard[74]).toBe(5)
    });
    test('RanksBoard[75] should result in 5', () => {
        expect(RanksBoard[75]).toBe(5)
    });
    test('RanksBoard[76] should result in 5', () => {
        expect(RanksBoard[76]).toBe(5)
    });
    test('RanksBoard[77] should result in 5', () => {
        expect(RanksBoard[77]).toBe(5)
    });
    test('RanksBoard[78] should result in 5', () => {
        expect(RanksBoard[78]).toBe(5)
    });
    test('RanksBoard[79] should result in 100', () => {
        expect(RanksBoard[79]).toBe(100)
    });
    test('RanksBoard[80] should result in 100', () => {
        expect(RanksBoard[80]).toBe(100)
    });
    test('RanksBoard[81] should result in 6', () => {
        expect(RanksBoard[81]).toBe(6)
    });
    test('RanksBoard[82] should result in 6', () => {
        expect(RanksBoard[82]).toBe(6)
    });
    test('RanksBoard[83] should result in 6', () => {
        expect(RanksBoard[83]).toBe(6)
    });
    test('RanksBoard[84] should result in 6', () => {
        expect(RanksBoard[84]).toBe(6)
    });
    test('RanksBoard[85] should result in 6', () => {
        expect(RanksBoard[85]).toBe(6)
    });
    test('RanksBoard[86] should result in 6', () => {
        expect(RanksBoard[86]).toBe(6)
    });
    test('RanksBoard[87] should result in 6', () => {
        expect(RanksBoard[87]).toBe(6)
    });
    test('RanksBoard[88] should result in 6', () => {
        expect(RanksBoard[88]).toBe(6)
    });
    test('RanksBoard[89] should result in 100', () => {
        expect(RanksBoard[89]).toBe(100)
    });
    test('RanksBoard[90] should result in 100', () => {
        expect(RanksBoard[90]).toBe(100)
    });
    test('RanksBoard[91] should result in 7', () => {
        expect(RanksBoard[91]).toBe(7)
    });
    test('RanksBoard[92] should result in 7', () => {
        expect(RanksBoard[92]).toBe(7)
    });
    test('RanksBoard[93] should result in 7', () => {
        expect(RanksBoard[93]).toBe(7)
    });
    test('RanksBoard[94] should result in 7', () => {
        expect(RanksBoard[94]).toBe(7)
    });
    test('RanksBoard[95] should result in 7', () => {
        expect(RanksBoard[95]).toBe(7)
    });
    test('RanksBoard[96] should result in 7', () => {
        expect(RanksBoard[96]).toBe(7)
    });
    test('RanksBoard[97] should result in 7', () => {
        expect(RanksBoard[97]).toBe(7)
    });
    test('RanksBoard[98] should result in 7', () => {
        expect(RanksBoard[98]).toBe(7)
    });
    test('RanksBoard[99] should result in 100', () => {
        expect(RanksBoard[99]).toBe(100)
    });
    test('RanksBoard[100] should result in 100', () => {
        expect(RanksBoard[100]).toBe(100)
    });
    test('RanksBoard[101] should result in 100', () => {
        expect(RanksBoard[101]).toBe(100)
    });
    test('RanksBoard[102] should result in 100', () => {
        expect(RanksBoard[102]).toBe(100)
    });
    test('RanksBoard[103] should result in 100', () => {
        expect(RanksBoard[103]).toBe(100)
    });
    test('RanksBoard[104] should result in 100', () => {
        expect(RanksBoard[104]).toBe(100)
    });
    test('RanksBoard[105] should result in 100', () => {
        expect(RanksBoard[105]).toBe(100)
    });
    test('RanksBoard[106] should result in 100', () => {
        expect(RanksBoard[106]).toBe(100)
    });
    test('RanksBoard[107] should result in 100', () => {
        expect(RanksBoard[107]).toBe(100)
    });
    test('RanksBoard[108] should result in 100', () => {
        expect(RanksBoard[108]).toBe(100)
    });
    test('RanksBoard[109] should result in 100', () => {
        expect(RanksBoard[109]).toBe(100)
    });
    test('RanksBoard[110] should result in 100', () => {
        expect(RanksBoard[110]).toBe(100)
    });
    test('RanksBoard[111] should result in 100', () => {
        expect(RanksBoard[111]).toBe(100)
    });
    test('RanksBoard[112] should result in 100', () => {
        expect(RanksBoard[112]).toBe(100)
    });
    test('RanksBoard[113] should result in 100', () => {
        expect(RanksBoard[113]).toBe(100)
    });
    test('RanksBoard[114] should result in 100', () => {
        expect(RanksBoard[114]).toBe(100)
    });
    test('RanksBoard[115] should result in 100', () => {
        expect(RanksBoard[115]).toBe(100)
    });
    test('RanksBoard[116] should result in 100', () => {
        expect(RanksBoard[116]).toBe(100)
    });
    test('RanksBoard[117] should result in 100', () => {
        expect(RanksBoard[117]).toBe(100)
    });
    test('RanksBoard[118] should result in 100', () => {
        expect(RanksBoard[118]).toBe(100)
    });
    test('RanksBoard[119] should result in 100', () => {
        expect(RanksBoard[119]).toBe(100)
    });
});

describe("Sqaure120ToSqaure64 values", () =>{
    test('Square120ToSquare64[0] should result in 64', () => {
        expect(Square120ToSquare64[0]).toBe(64);
    });
    test('Square120ToSquare64[1] should result in 64', () => {
        expect(Square120ToSquare64[1]).toBe(64);
    });
    test('Square120ToSquare64[2] should result in 64', () => {
        expect(Square120ToSquare64[2]).toBe(64);
    });
    test('Square120ToSquare64[3] should result in 64', () => {
        expect(Square120ToSquare64[3]).toBe(64);
    });
    test('Square120ToSquare64[4] should result in 64', () => {
        expect(Square120ToSquare64[4]).toBe(64);
    });
    test('Square120ToSquare64[5] should result in 64', () => {
        expect(Square120ToSquare64[5]).toBe(64);
    });
    test('Square120ToSquare64[6] should result in 64', () => {
        expect(Square120ToSquare64[6]).toBe(64);
    });
    test('Square120ToSquare64[7] should result in 64', () => {
        expect(Square120ToSquare64[7]).toBe(64);
    });
    test('Square120ToSquare64[8] should result in 64', () => {
        expect(Square120ToSquare64[8]).toBe(64);
    });
    test('Square120ToSquare64[9] should result in 64', () => {
        expect(Square120ToSquare64[9]).toBe(64);
    });
    test('Square120ToSquare64[10] should result in 64', () => {
        expect(Square120ToSquare64[10]).toBe(64);
    });
    test('Square120ToSquare64[11] should result in 64', () => {
        expect(Square120ToSquare64[11]).toBe(64);
    });
    test('Square120ToSquare64[12] should result in 64', () => {
        expect(Square120ToSquare64[12]).toBe(64);
    });
    test('Square120ToSquare64[13] should result in 64', () => {
        expect(Square120ToSquare64[13]).toBe(64);
    });
    test('Square120ToSquare64[14] should result in 64', () => {
        expect(Square120ToSquare64[14]).toBe(64);
    });
    test('Square120ToSquare64[15] should result in 64', () => {
        expect(Square120ToSquare64[15]).toBe(64);
    });
    test('Square120ToSquare64[16] should result in 64', () => {
        expect(Square120ToSquare64[16]).toBe(64);
    });
    test('Square120ToSquare64[17] should result in 64', () => {
        expect(Square120ToSquare64[17]).toBe(64);
    });
    test('Square120ToSquare64[18] should result in 64', () => {
        expect(Square120ToSquare64[18]).toBe(64);
    });
    test('Square120ToSquare64[19] should result in 64', () => {
        expect(Square120ToSquare64[19]).toBe(64);
    });
    test('Square120ToSquare64[20] should result in 64', () => {
        expect(Square120ToSquare64[20]).toBe(64);
    });
    test('Square120ToSquare64[21] should result in 0', () => {
        expect(Square120ToSquare64[21]).toBe(0);
    });
    test('Square120ToSquare64[22] should result in 1', () => {
        expect(Square120ToSquare64[22]).toBe(1);
    });
    test('Square120ToSquare64[23] should result in 2', () => {
        expect(Square120ToSquare64[23]).toBe(2);
    });
    test('Square120ToSquare64[24] should result in 3', () => {
        expect(Square120ToSquare64[24]).toBe(3);
    });
    test('Square120ToSquare64[25] should result in 4', () => {
        expect(Square120ToSquare64[25]).toBe(4);
    });
    test('Square120ToSquare64[26] should result in 5', () => {
        expect(Square120ToSquare64[26]).toBe(5);
    });
    test('Square120ToSquare64[27] should result in 6', () => {
        expect(Square120ToSquare64[27]).toBe(6);
    });
    test('Square120ToSquare64[28] should result in 7', () => {
        expect(Square120ToSquare64[28]).toBe(7);
    });
    test('Square120ToSquare64[29] should result in 64', () => {
        expect(Square120ToSquare64[29]).toBe(64);
    });
    test('Square120ToSquare64[30] should result in 64', () => {
        expect(Square120ToSquare64[30]).toBe(64);
    });
    test('Square120ToSquare64[31] should result in 8', () => {
        expect(Square120ToSquare64[31]).toBe(8);
    });
    test('Square120ToSquare64[32] should result in 9', () => {
        expect(Square120ToSquare64[32]).toBe(9);
    });
    test('Square120ToSquare64[33] should result in 10', () => {
        expect(Square120ToSquare64[33]).toBe(10);
    });
    test('Square120ToSquare64[34] should result in 11', () => {
        expect(Square120ToSquare64[34]).toBe(11);
    });
    test('Square120ToSquare64[35] should result in 12', () => {
        expect(Square120ToSquare64[35]).toBe(12);
    });
    test('Square120ToSquare64[36] should result in 13', () => {
        expect(Square120ToSquare64[36]).toBe(13);
    });
    test('Square120ToSquare64[37] should result in 14', () => {
        expect(Square120ToSquare64[37]).toBe(14);
    });
    test('Square120ToSquare64[38] should result in 15', () => {
        expect(Square120ToSquare64[38]).toBe(15);
    });
    test('Square120ToSquare64[39] should result in 64', () => {
        expect(Square120ToSquare64[39]).toBe(64);
    });
    test('Square120ToSquare64[40] should result in 64', () => {
        expect(Square120ToSquare64[40]).toBe(64);
    });
    test('Square120ToSquare64[41] should result in 16', () => {
        expect(Square120ToSquare64[41]).toBe(16);
    });
    test('Square120ToSquare64[42] should result in 17', () => {
        expect(Square120ToSquare64[42]).toBe(17);
    });
    test('Square120ToSquare64[43] should result in 18', () => {
        expect(Square120ToSquare64[43]).toBe(18);
    });
    test('Square120ToSquare64[44] should result in 19', () => {
        expect(Square120ToSquare64[44]).toBe(19);
    });
    test('Square120ToSquare64[45] should result in 20', () => {
        expect(Square120ToSquare64[45]).toBe(20);
    });
    test('Square120ToSquare64[46] should result in 21', () => {
        expect(Square120ToSquare64[46]).toBe(21);
    });
    test('Square120ToSquare64[47] should result in 22', () => {
        expect(Square120ToSquare64[47]).toBe(22);
    });
    test('Square120ToSquare64[48] should result in 23', () => {
        expect(Square120ToSquare64[48]).toBe(23);
    });
    test('Square120ToSquare64[49] should result in 64', () => {
        expect(Square120ToSquare64[49]).toBe(64);
    });
    test('Square120ToSquare64[50] should result in 64', () => {
        expect(Square120ToSquare64[50]).toBe(64);
    });
    test('Square120ToSquare64[51] should result in 24', () => {
        expect(Square120ToSquare64[51]).toBe(24);
    });
    test('Square120ToSquare64[52] should result in 25', () => {
        expect(Square120ToSquare64[52]).toBe(25);
    });
    test('Square120ToSquare64[53] should result in 26', () => {
        expect(Square120ToSquare64[53]).toBe(26);
    });
    test('Square120ToSquare64[54] should result in 27', () => {
        expect(Square120ToSquare64[54]).toBe(27);
    });
    test('Square120ToSquare64[55] should result in 28', () => {
        expect(Square120ToSquare64[55]).toBe(28);
    });
    test('Square120ToSquare64[56] should result in 29', () => {
        expect(Square120ToSquare64[56]).toBe(29);
    });
    test('Square120ToSquare64[57] should result in 30', () => {
        expect(Square120ToSquare64[57]).toBe(30);
    });
    test('Square120ToSquare64[58] should result in 31', () => {
        expect(Square120ToSquare64[58]).toBe(31);
    });
    test('Square120ToSquare64[59] should result in 64', () => {
        expect(Square120ToSquare64[59]).toBe(64);
    });
    test('Square120ToSquare64[60] should result in 64', () => {
        expect(Square120ToSquare64[60]).toBe(64);
    });
    test('Square120ToSquare64[61] should result in 32', () => {
        expect(Square120ToSquare64[61]).toBe(32);
    });
    test('Square120ToSquare64[62] should result in 33', () => {
        expect(Square120ToSquare64[62]).toBe(33);
    });
    test('Square120ToSquare64[63] should result in 34', () => {
        expect(Square120ToSquare64[63]).toBe(34);
    });
    test('Square120ToSquare64[64] should result in 35', () => {
        expect(Square120ToSquare64[64]).toBe(35);
    });
    test('Square120ToSquare64[65] should result in 36', () => {
        expect(Square120ToSquare64[65]).toBe(36);
    });
    test('Square120ToSquare64[66] should result in 37', () => {
        expect(Square120ToSquare64[66]).toBe(37);
    });
    test('Square120ToSquare64[67] should result in 38', () => {
        expect(Square120ToSquare64[67]).toBe(38);
    });
    test('Square120ToSquare64[68] should result in 39', () => {
        expect(Square120ToSquare64[68]).toBe(39);
    });
    test('Square120ToSquare64[69] should result in 64', () => {
        expect(Square120ToSquare64[69]).toBe(64);
    });
    test('Square120ToSquare64[70] should result in 64', () => {
        expect(Square120ToSquare64[70]).toBe(64);
    });
    test('Square120ToSquare64[71] should result in 40', () => {
        expect(Square120ToSquare64[71]).toBe(40);
    });
    test('Square120ToSquare64[72] should result in 41', () => {
        expect(Square120ToSquare64[72]).toBe(41);
    });
    test('Square120ToSquare64[73] should result in 42', () => {
        expect(Square120ToSquare64[73]).toBe(42);
    });
    test('Square120ToSquare64[74] should result in 43', () => {
        expect(Square120ToSquare64[74]).toBe(43);
    });
    test('Square120ToSquare64[75] should result in 44', () => {
        expect(Square120ToSquare64[75]).toBe(44);
    });
    test('Square120ToSquare64[76] should result in 45', () => {
        expect(Square120ToSquare64[76]).toBe(45);
    });
    test('Square120ToSquare64[77] should result in 46', () => {
        expect(Square120ToSquare64[77]).toBe(46);
    });
    test('Square120ToSquare64[78] should result in 47', () => {
        expect(Square120ToSquare64[78]).toBe(47);
    });
    test('Square120ToSquare64[79] should result in 64', () => {
        expect(Square120ToSquare64[79]).toBe(64);
    });
    test('Square120ToSquare64[80] should result in 64', () => {
        expect(Square120ToSquare64[80]).toBe(64);
    });
    test('Square120ToSquare64[81] should result in 48', () => {
        expect(Square120ToSquare64[81]).toBe(48);
    });
    test('Square120ToSquare64[82] should result in 49', () => {
        expect(Square120ToSquare64[82]).toBe(49);
    });
    test('Square120ToSquare64[83] should result in 50', () => {
        expect(Square120ToSquare64[83]).toBe(50);
    });
    test('Square120ToSquare64[84] should result in 51', () => {
        expect(Square120ToSquare64[84]).toBe(51);
    });
    test('Square120ToSquare64[85] should result in 52', () => {
        expect(Square120ToSquare64[85]).toBe(52);
    });
    test('Square120ToSquare64[86] should result in 53', () => {
        expect(Square120ToSquare64[86]).toBe(53);
    });
    test('Square120ToSquare64[87] should result in 54', () => {
        expect(Square120ToSquare64[87]).toBe(54);
    });
    test('Square120ToSquare64[88] should result in 55', () => {
        expect(Square120ToSquare64[88]).toBe(55);
    });
    test('Square120ToSquare64[89] should result in 64', () => {
        expect(Square120ToSquare64[89]).toBe(64);
    });
    test('Square120ToSquare64[90] should result in 64', () => {
        expect(Square120ToSquare64[90]).toBe(64);
    });
    test('Square120ToSquare64[91] should result in 56', () => {
        expect(Square120ToSquare64[91]).toBe(56);
    });
    test('Square120ToSquare64[92] should result in 57', () => {
        expect(Square120ToSquare64[92]).toBe(57);
    });
    test('Square120ToSquare64[93] should result in 58', () => {
        expect(Square120ToSquare64[93]).toBe(58);
    });
    test('Square120ToSquare64[94] should result in 59', () => {
        expect(Square120ToSquare64[94]).toBe(59);
    });
    test('Square120ToSquare64[95] should result in 60', () => {
        expect(Square120ToSquare64[95]).toBe(60);
    });
    test('Square120ToSquare64[96] should result in 61', () => {
        expect(Square120ToSquare64[96]).toBe(61);
    });
    test('Square120ToSquare64[97] should result in 62', () => {
        expect(Square120ToSquare64[97]).toBe(62);
    });
    test('Square120ToSquare64[98] should result in 63', () => {
        expect(Square120ToSquare64[98]).toBe(63);
    });
    test('Square120ToSquare64[99] should result in 64', () => {
        expect(Square120ToSquare64[99]).toBe(64);
    });
    test('Square120ToSquare64[100] should result in 64', () => {
        expect(Square120ToSquare64[100]).toBe(64);
    });
    test('Square120ToSquare64[101] should result in 64', () => {
        expect(Square120ToSquare64[101]).toBe(64);
    });
    test('Square120ToSquare64[102] should result in 64', () => {
        expect(Square120ToSquare64[102]).toBe(64);
    });
    test('Square120ToSquare64[103] should result in 64', () => {
        expect(Square120ToSquare64[103]).toBe(64);
    });
    test('Square120ToSquare64[104] should result in 64', () => {
        expect(Square120ToSquare64[104]).toBe(64);
    });
    test('Square120ToSquare64[105] should result in 64', () => {
        expect(Square120ToSquare64[105]).toBe(64);
    });
    test('Square120ToSquare64[106] should result in 64', () => {
        expect(Square120ToSquare64[106]).toBe(64);
    });
    test('Square120ToSquare64[107] should result in 64', () => {
        expect(Square120ToSquare64[107]).toBe(64);
    });
    test('Square120ToSquare64[108] should result in 64', () => {
        expect(Square120ToSquare64[108]).toBe(64);
    });
    test('Square120ToSquare64[109] should result in 64', () => {
        expect(Square120ToSquare64[109]).toBe(64);
    });
    test('Square120ToSquare64[110] should result in 64', () => {
        expect(Square120ToSquare64[110]).toBe(64);
    });
    test('Square120ToSquare64[111] should result in 64', () => {
        expect(Square120ToSquare64[111]).toBe(64);
    });
    test('Square120ToSquare64[112] should result in 64', () => {
        expect(Square120ToSquare64[112]).toBe(64);
    });
    test('Square120ToSquare64[113] should result in 64', () => {
        expect(Square120ToSquare64[113]).toBe(64);
    });
    test('Square120ToSquare64[114] should result in 64', () => {
        expect(Square120ToSquare64[114]).toBe(64);
    });
    test('Square120ToSquare64[115] should result in 64', () => {
        expect(Square120ToSquare64[115]).toBe(64);
    });
    test('Square120ToSquare64[116] should result in 64', () => {
        expect(Square120ToSquare64[116]).toBe(64);
    });
    test('Square120ToSquare64[117] should result in 64', () => {
        expect(Square120ToSquare64[117]).toBe(64);
    });
    test('Square120ToSquare64[118] should result in 64', () => {
        expect(Square120ToSquare64[118]).toBe(64);
    });
    test('Square120ToSquare64[119] should result in 64', () => {
        expect(Square120ToSquare64[119]).toBe(64);
    });
});

describe("Square64ToSquare120 values", () =>{
    test('Square64ToSquare120[0] should result in 21', () => {
        expect(Square64ToSquare120[0]).toBe(21);
    });
    test('Square64ToSquare120[1] should result in 22', () => {
        expect(Square64ToSquare120[1]).toBe(22);
    });
    test('Square64ToSquare120[2] should result in 23', () => {
        expect(Square64ToSquare120[2]).toBe(23);
    });
    test('Square64ToSquare120[3] should result in 24', () => {
        expect(Square64ToSquare120[3]).toBe(24);
    });
    test('Square64ToSquare120[4] should result in 25', () => {
        expect(Square64ToSquare120[4]).toBe(25);
    });
    test('Square64ToSquare120[5] should result in 26', () => {
        expect(Square64ToSquare120[5]).toBe(26);
    });
    test('Square64ToSquare120[6] should result in 27', () => {
        expect(Square64ToSquare120[6]).toBe(27);
    });
    test('Square64ToSquare120[7] should result in 28', () => {
        expect(Square64ToSquare120[7]).toBe(28);
    });
    test('Square64ToSquare120[8] should result in 31', () => {
        expect(Square64ToSquare120[8]).toBe(31);
    });
    test('Square64ToSquare120[9] should result in 32', () => {
        expect(Square64ToSquare120[9]).toBe(32);
    });
    test('Square64ToSquare120[10] should result in 33', () => {
        expect(Square64ToSquare120[10]).toBe(33);
    });
    test('Square64ToSquare120[11] should result in 34', () => {
        expect(Square64ToSquare120[11]).toBe(34);
    });
    test('Square64ToSquare120[12] should result in 35', () => {
        expect(Square64ToSquare120[12]).toBe(35);
    });
    test('Square64ToSquare120[13] should result in 36', () => {
        expect(Square64ToSquare120[13]).toBe(36);
    });
    test('Square64ToSquare120[14] should result in 37', () => {
        expect(Square64ToSquare120[14]).toBe(37);
    });
    test('Square64ToSquare120[15] should result in 38', () => {
        expect(Square64ToSquare120[15]).toBe(38);
    });
    test('Square64ToSquare120[16] should result in 41', () => {
        expect(Square64ToSquare120[16]).toBe(41);
    });
    test('Square64ToSquare120[17] should result in 42', () => {
        expect(Square64ToSquare120[17]).toBe(42);
    });
    test('Square64ToSquare120[18] should result in 43', () => {
        expect(Square64ToSquare120[18]).toBe(43);
    });
    test('Square64ToSquare120[19] should result in 44', () => {
        expect(Square64ToSquare120[19]).toBe(44);
    });
    test('Square64ToSquare120[20] should result in 45', () => {
        expect(Square64ToSquare120[20]).toBe(45);
    });
    test('Square64ToSquare120[21] should result in 46', () => {
        expect(Square64ToSquare120[21]).toBe(46);
    });
    test('Square64ToSquare120[22] should result in 47', () => {
        expect(Square64ToSquare120[22]).toBe(47);
    });
    test('Square64ToSquare120[23] should result in 48', () => {
        expect(Square64ToSquare120[23]).toBe(48);
    });
    test('Square64ToSquare120[24] should result in 51', () => {
        expect(Square64ToSquare120[24]).toBe(51);
    });
    test('Square64ToSquare120[25] should result in 52', () => {
        expect(Square64ToSquare120[25]).toBe(52);
    });
    test('Square64ToSquare120[26] should result in 53', () => {
        expect(Square64ToSquare120[26]).toBe(53);
    });
    test('Square64ToSquare120[27] should result in 54', () => {
        expect(Square64ToSquare120[27]).toBe(54);
    });
    test('Square64ToSquare120[28] should result in 55', () => {
        expect(Square64ToSquare120[28]).toBe(55);
    });
    test('Square64ToSquare120[29] should result in 56', () => {
        expect(Square64ToSquare120[29]).toBe(56);
    });
    test('Square64ToSquare120[30] should result in 57', () => {
        expect(Square64ToSquare120[30]).toBe(57);
    });
    test('Square64ToSquare120[31] should result in 58', () => {
        expect(Square64ToSquare120[31]).toBe(58);
    });
    test('Square64ToSquare120[32] should result in 61', () => {
        expect(Square64ToSquare120[32]).toBe(61);
    });
    test('Square64ToSquare120[33] should result in 62', () => {
        expect(Square64ToSquare120[33]).toBe(62);
    });
    test('Square64ToSquare120[34] should result in 63', () => {
        expect(Square64ToSquare120[34]).toBe(63);
    });
    test('Square64ToSquare120[35] should result in 64', () => {
        expect(Square64ToSquare120[35]).toBe(64);
    });
    test('Square64ToSquare120[36] should result in 65', () => {
        expect(Square64ToSquare120[36]).toBe(65);
    });
    test('Square64ToSquare120[37] should result in 66', () => {
        expect(Square64ToSquare120[37]).toBe(66);
    });
    test('Square64ToSquare120[38] should result in 67', () => {
        expect(Square64ToSquare120[38]).toBe(67);
    });
    test('Square64ToSquare120[39] should result in 68', () => {
        expect(Square64ToSquare120[39]).toBe(68);
    });
    test('Square64ToSquare120[40] should result in 71', () => {
        expect(Square64ToSquare120[40]).toBe(71);
    });
    test('Square64ToSquare120[41] should result in 72', () => {
        expect(Square64ToSquare120[41]).toBe(72);
    });
    test('Square64ToSquare120[42] should result in 73', () => {
        expect(Square64ToSquare120[42]).toBe(73);
    });
    test('Square64ToSquare120[43] should result in 74', () => {
        expect(Square64ToSquare120[43]).toBe(74);
    });
    test('Square64ToSquare120[44] should result in 75', () => {
        expect(Square64ToSquare120[44]).toBe(75);
    });
    test('Square64ToSquare120[45] should result in 76', () => {
        expect(Square64ToSquare120[45]).toBe(76);
    });
    test('Square64ToSquare120[46] should result in 77', () => {
        expect(Square64ToSquare120[46]).toBe(77);
    });
    test('Square64ToSquare120[47] should result in 78', () => {
        expect(Square64ToSquare120[47]).toBe(78);
    });
    test('Square64ToSquare120[48] should result in 81', () => {
        expect(Square64ToSquare120[48]).toBe(81);
    });
    test('Square64ToSquare120[49] should result in 82', () => {
        expect(Square64ToSquare120[49]).toBe(82);
    });
    test('Square64ToSquare120[50] should result in 83', () => {
        expect(Square64ToSquare120[50]).toBe(83);
    });
    test('Square64ToSquare120[51] should result in 84', () => {
        expect(Square64ToSquare120[51]).toBe(84);
    });
    test('Square64ToSquare120[52] should result in 85', () => {
        expect(Square64ToSquare120[52]).toBe(85);
    });
    test('Square64ToSquare120[53] should result in 86', () => {
        expect(Square64ToSquare120[53]).toBe(86);
    });
    test('Square64ToSquare120[54] should result in 87', () => {
        expect(Square64ToSquare120[54]).toBe(87);
    });
    test('Square64ToSquare120[55] should result in 88', () => {
        expect(Square64ToSquare120[55]).toBe(88);
    });
    test('Square64ToSquare120[56] should result in 91', () => {
        expect(Square64ToSquare120[56]).toBe(91);
    });
    test('Square64ToSquare120[57] should result in 92', () => {
        expect(Square64ToSquare120[57]).toBe(92);
    });
    test('Square64ToSquare120[58] should result in 93', () => {
        expect(Square64ToSquare120[58]).toBe(93);
    });
    test('Square64ToSquare120[59] should result in 94', () => {
        expect(Square64ToSquare120[59]).toBe(94);
    });
    test('Square64ToSquare120[60] should result in 95', () => {
        expect(Square64ToSquare120[60]).toBe(95);
    });
    test('Square64ToSquare120[61] should result in 96', () => {
        expect(Square64ToSquare120[61]).toBe(96);
    });
    test('Square64ToSquare120[62] should result in 97', () => {
        expect(Square64ToSquare120[62]).toBe(97);
    });
    test('Square64ToSquare120[63] should result in 98', () => {
        expect(Square64ToSquare120[63]).toBe(98);
    });
});

describe("FileRankToSquare function values", () => {
    test('FileRankToSquare(FILES.FILE_A,RANKS.RANK_1) should result in 21', () => {
        expect(FileRankToSquare(FILES.FILE_A,RANKS.RANK_1)).toBe(21);
    });
    test('FileRankToSquare(FILES.FILE_A,RANKS.RANK_2) should result in 31', () => {
        expect(FileRankToSquare(FILES.FILE_A,RANKS.RANK_2)).toBe(31);
    });
    test('FileRankToSquare(FILES.FILE_A,RANKS.RANK_3) should result in 41', () => {
        expect(FileRankToSquare(FILES.FILE_A,RANKS.RANK_3)).toBe(41);
    });
    test('FileRankToSquare(FILES.FILE_A,RANKS.RANK_4) should result in 51', () => {
        expect(FileRankToSquare(FILES.FILE_A,RANKS.RANK_4)).toBe(51);
    });
    test('FileRankToSquare(FILES.FILE_A,RANKS.RANK_5) should result in 61', () => {
        expect(FileRankToSquare(FILES.FILE_A,RANKS.RANK_5)).toBe(61);
    });
    test('FileRankToSquare(FILES.FILE_A,RANKS.RANK_6) should result in 71', () => {
        expect(FileRankToSquare(FILES.FILE_A,RANKS.RANK_6)).toBe(71);
    });
    test('FileRankToSquare(FILES.FILE_A,RANKS.RANK_7) should result in 81', () => {
        expect(FileRankToSquare(FILES.FILE_A,RANKS.RANK_7)).toBe(81);
    });
    test('FileRankToSquare(FILES.FILE_A,RANKS.RANK_8) should result in 91', () => {
        expect(FileRankToSquare(FILES.FILE_A,RANKS.RANK_8)).toBe(91);
    });
    test('FileRankToSquare(FILES.FILE_B,RANKS.RANK_1) should result in 22', () => {
        expect(FileRankToSquare(FILES.FILE_B,RANKS.RANK_1)).toBe(22);
    });
    test('FileRankToSquare(FILES.FILE_B,RANKS.RANK_2) should result in 32', () => {
        expect(FileRankToSquare(FILES.FILE_B,RANKS.RANK_2)).toBe(32);
    });
    test('FileRankToSquare(FILES.FILE_B,RANKS.RANK_3) should result in 42', () => {
        expect(FileRankToSquare(FILES.FILE_B,RANKS.RANK_3)).toBe(42);
    });
    test('FileRankToSquare(FILES.FILE_B,RANKS.RANK_4) should result in 52', () => {
        expect(FileRankToSquare(FILES.FILE_B,RANKS.RANK_4)).toBe(52);
    });
    test('FileRankToSquare(FILES.FILE_B,RANKS.RANK_5) should result in 62', () => {
        expect(FileRankToSquare(FILES.FILE_B,RANKS.RANK_5)).toBe(62);
    });
    test('FileRankToSquare(FILES.FILE_B,RANKS.RANK_6) should result in 72', () => {
        expect(FileRankToSquare(FILES.FILE_B,RANKS.RANK_6)).toBe(72);
    });
    test('FileRankToSquare(FILES.FILE_B,RANKS.RANK_7) should result in 82', () => {
        expect(FileRankToSquare(FILES.FILE_B,RANKS.RANK_7)).toBe(82);
    });
    test('FileRankToSquare(FILES.FILE_B,RANKS.RANK_8) should result in 92', () => {
        expect(FileRankToSquare(FILES.FILE_B,RANKS.RANK_8)).toBe(92);
    });
    test('FileRankToSquare(FILES.FILE_C,RANKS.RANK_1) should result in 23', () => {
        expect(FileRankToSquare(FILES.FILE_C,RANKS.RANK_1)).toBe(23);
    });
    test('FileRankToSquare(FILES.FILE_C,RANKS.RANK_2) should result in 33', () => {
        expect(FileRankToSquare(FILES.FILE_C,RANKS.RANK_2)).toBe(33);
    });
    test('FileRankToSquare(FILES.FILE_C,RANKS.RANK_3) should result in 43', () => {
        expect(FileRankToSquare(FILES.FILE_C,RANKS.RANK_3)).toBe(43);
    });
    test('FileRankToSquare(FILES.FILE_C,RANKS.RANK_4) should result in 53', () => {
        expect(FileRankToSquare(FILES.FILE_C,RANKS.RANK_4)).toBe(53);
    });
    test('FileRankToSquare(FILES.FILE_C,RANKS.RANK_5) should result in 63', () => {
        expect(FileRankToSquare(FILES.FILE_C,RANKS.RANK_5)).toBe(63);
    });
    test('FileRankToSquare(FILES.FILE_C,RANKS.RANK_6) should result in 73', () => {
        expect(FileRankToSquare(FILES.FILE_C,RANKS.RANK_6)).toBe(73);
    });
    test('FileRankToSquare(FILES.FILE_C,RANKS.RANK_7) should result in 83', () => {
        expect(FileRankToSquare(FILES.FILE_C,RANKS.RANK_7)).toBe(83);
    });
    test('FileRankToSquare(FILES.FILE_C,RANKS.RANK_8) should result in 93', () => {
        expect(FileRankToSquare(FILES.FILE_C,RANKS.RANK_8)).toBe(93);
    });
    test('FileRankToSquare(FILES.FILE_D,RANKS.RANK_1) should result in 24', () => {
        expect(FileRankToSquare(FILES.FILE_D,RANKS.RANK_1)).toBe(24);
    });
    test('FileRankToSquare(FILES.FILE_D,RANKS.RANK_2) should result in 34', () => {
        expect(FileRankToSquare(FILES.FILE_D,RANKS.RANK_2)).toBe(34);
    });
    test('FileRankToSquare(FILES.FILE_D,RANKS.RANK_3) should result in 44', () => {
        expect(FileRankToSquare(FILES.FILE_D,RANKS.RANK_3)).toBe(44);
    });
    test('FileRankToSquare(FILES.FILE_D,RANKS.RANK_4) should result in 54', () => {
        expect(FileRankToSquare(FILES.FILE_D,RANKS.RANK_4)).toBe(54);
    });
    test('FileRankToSquare(FILES.FILE_D,RANKS.RANK_5) should result in 64', () => {
        expect(FileRankToSquare(FILES.FILE_D,RANKS.RANK_5)).toBe(64);
    });
    test('FileRankToSquare(FILES.FILE_D,RANKS.RANK_6) should result in 74', () => {
        expect(FileRankToSquare(FILES.FILE_D,RANKS.RANK_6)).toBe(74);
    });
    test('FileRankToSquare(FILES.FILE_D,RANKS.RANK_7) should result in 84', () => {
        expect(FileRankToSquare(FILES.FILE_D,RANKS.RANK_7)).toBe(84);
    });
    test('FileRankToSquare(FILES.FILE_D,RANKS.RANK_8) should result in 94', () => {
        expect(FileRankToSquare(FILES.FILE_D,RANKS.RANK_8)).toBe(94);
    });
    test('FileRankToSquare(FILES.FILE_E,RANKS.RANK_1) should result in 25', () => {
        expect(FileRankToSquare(FILES.FILE_E,RANKS.RANK_1)).toBe(25);
    });
    test('FileRankToSquare(FILES.FILE_E,RANKS.RANK_2) should result in 35', () => {
        expect(FileRankToSquare(FILES.FILE_E,RANKS.RANK_2)).toBe(35);
    });
    test('FileRankToSquare(FILES.FILE_E,RANKS.RANK_3) should result in 45', () => {
        expect(FileRankToSquare(FILES.FILE_E,RANKS.RANK_3)).toBe(45);
    });
    test('FileRankToSquare(FILES.FILE_E,RANKS.RANK_4) should result in 55', () => {
        expect(FileRankToSquare(FILES.FILE_E,RANKS.RANK_4)).toBe(55);
    });
    test('FileRankToSquare(FILES.FILE_E,RANKS.RANK_5) should result in 65', () => {
        expect(FileRankToSquare(FILES.FILE_E,RANKS.RANK_5)).toBe(65);
    });
    test('FileRankToSquare(FILES.FILE_E,RANKS.RANK_6) should result in 75', () => {
        expect(FileRankToSquare(FILES.FILE_E,RANKS.RANK_6)).toBe(75);
    });
    test('FileRankToSquare(FILES.FILE_E,RANKS.RANK_7) should result in 85', () => {
        expect(FileRankToSquare(FILES.FILE_E,RANKS.RANK_7)).toBe(85);
    });
    test('FileRankToSquare(FILES.FILE_E,RANKS.RANK_8) should result in 95', () => {
        expect(FileRankToSquare(FILES.FILE_E,RANKS.RANK_8)).toBe(95);
    });
    test('FileRankToSquare(FILES.FILE_F,RANKS.RANK_1) should result in 26', () => {
        expect(FileRankToSquare(FILES.FILE_F,RANKS.RANK_1)).toBe(26);
    });
    test('FileRankToSquare(FILES.FILE_F,RANKS.RANK_2) should result in 36', () => {
        expect(FileRankToSquare(FILES.FILE_F,RANKS.RANK_2)).toBe(36);
    });
    test('FileRankToSquare(FILES.FILE_F,RANKS.RANK_3) should result in 46', () => {
        expect(FileRankToSquare(FILES.FILE_F,RANKS.RANK_3)).toBe(46);
    });
    test('FileRankToSquare(FILES.FILE_F,RANKS.RANK_4) should result in 56', () => {
        expect(FileRankToSquare(FILES.FILE_F,RANKS.RANK_4)).toBe(56);
    });
    test('FileRankToSquare(FILES.FILE_F,RANKS.RANK_5) should result in 66', () => {
        expect(FileRankToSquare(FILES.FILE_F,RANKS.RANK_5)).toBe(66);
    });
    test('FileRankToSquare(FILES.FILE_F,RANKS.RANK_6) should result in 76', () => {
        expect(FileRankToSquare(FILES.FILE_F,RANKS.RANK_6)).toBe(76);
    });
    test('FileRankToSquare(FILES.FILE_F,RANKS.RANK_7) should result in 86', () => {
        expect(FileRankToSquare(FILES.FILE_F,RANKS.RANK_7)).toBe(86);
    });
    test('FileRankToSquare(FILES.FILE_F,RANKS.RANK_8) should result in 96', () => {
        expect(FileRankToSquare(FILES.FILE_F,RANKS.RANK_8)).toBe(96);
    });
    test('FileRankToSquare(FILES.FILE_G,RANKS.RANK_1) should result in 27', () => {
        expect(FileRankToSquare(FILES.FILE_G,RANKS.RANK_1)).toBe(27);
    });
    test('FileRankToSquare(FILES.FILE_G,RANKS.RANK_2) should result in 37', () => {
        expect(FileRankToSquare(FILES.FILE_G,RANKS.RANK_2)).toBe(37);
    });
    test('FileRankToSquare(FILES.FILE_G,RANKS.RANK_3) should result in 47', () => {
        expect(FileRankToSquare(FILES.FILE_G,RANKS.RANK_3)).toBe(47);
    });
    test('FileRankToSquare(FILES.FILE_G,RANKS.RANK_4) should result in 57', () => {
        expect(FileRankToSquare(FILES.FILE_G,RANKS.RANK_4)).toBe(57);
    });
    test('FileRankToSquare(FILES.FILE_G,RANKS.RANK_5) should result in 67', () => {
        expect(FileRankToSquare(FILES.FILE_G,RANKS.RANK_5)).toBe(67);
    });
    test('FileRankToSquare(FILES.FILE_G,RANKS.RANK_6) should result in 77', () => {
        expect(FileRankToSquare(FILES.FILE_G,RANKS.RANK_6)).toBe(77);
    });
    test('FileRankToSquare(FILES.FILE_G,RANKS.RANK_7) should result in 87', () => {
        expect(FileRankToSquare(FILES.FILE_G,RANKS.RANK_7)).toBe(87);
    });
    test('FileRankToSquare(FILES.FILE_G,RANKS.RANK_8) should result in 97', () => {
        expect(FileRankToSquare(FILES.FILE_G,RANKS.RANK_8)).toBe(97);
    });
    test('FileRankToSquare(FILES.FILE_H,RANKS.RANK_1) should result in 28', () => {
        expect(FileRankToSquare(FILES.FILE_H,RANKS.RANK_1)).toBe(28);
    });
    test('FileRankToSquare(FILES.FILE_H,RANKS.RANK_2) should result in 38', () => {
        expect(FileRankToSquare(FILES.FILE_H,RANKS.RANK_2)).toBe(38);
    });
    test('FileRankToSquare(FILES.FILE_H,RANKS.RANK_3) should result in 48', () => {
        expect(FileRankToSquare(FILES.FILE_H,RANKS.RANK_3)).toBe(48);
    });
    test('FileRankToSquare(FILES.FILE_H,RANKS.RANK_4) should result in 58', () => {
        expect(FileRankToSquare(FILES.FILE_H,RANKS.RANK_4)).toBe(58);
    });
    test('FileRankToSquare(FILES.FILE_H,RANKS.RANK_5) should result in 68', () => {
        expect(FileRankToSquare(FILES.FILE_H,RANKS.RANK_5)).toBe(68);
    });
    test('FileRankToSquare(FILES.FILE_H,RANKS.RANK_6) should result in 78', () => {
        expect(FileRankToSquare(FILES.FILE_H,RANKS.RANK_6)).toBe(78);
    });
    test('FileRankToSquare(FILES.FILE_H,RANKS.RANK_7) should result in 88', () => {
        expect(FileRankToSquare(FILES.FILE_H,RANKS.RANK_7)).toBe(88);
    });
    test('FileRankToSquare(FILES.FILE_H,RANKS.RANK_8) should result in 98', () => {
        expect(FileRankToSquare(FILES.FILE_H,RANKS.RANK_8)).toBe(98);
    });
});