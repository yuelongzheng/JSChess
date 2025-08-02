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

describe("ParseFen function", () => {
    test('ParseFen(rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1)', () => {
        ParseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 2, 3, 5, 6, 3, 2, 4, 100, 100, 1, 1, 1, 1, 1, 1, 1, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 7, 7, 7, 7, 7, 7, 7, 7, 100, 100, 10, 8, 9, 11, 12, 9, 8, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(54200);
        expect(GameBoard.material[1]).toBe(54200);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(15);
    });
    test('ParseFen(r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1)', () => {
        ParseFen("r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 1, 1, 1, 3, 3, 1, 1, 1, 100, 100, 0, 0, 2, 0, 0, 5, 0, 7, 100, 100, 0, 7, 0, 0, 1, 0, 0, 0, 100, 100, 0, 0, 0, 1, 2, 0, 0, 0, 100, 100, 9, 8, 0, 0, 7, 8, 7, 0, 100, 100, 7, 0, 7, 7, 11, 7, 9, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(54200);
        expect(GameBoard.material[1]).toBe(54200);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(15);
    });
    test('ParseFen(4k3/8/8/8/8/8/8/4K2R w K - 0 1)', () => {
        ParseFen("4k3/8/8/8/8/8/8/4K2R w K - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50550);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(1);
    });
    test('ParseFen(4k3/8/8/8/8/8/8/R3K3 w Q - 0 1)', () => {
        ParseFen("4k3/8/8/8/8/8/8/R3K3 w Q - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50550);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(2);
    });
    test('ParseFen(4k2r/8/8/8/8/8/8/4K3 w k - 0 1)', () => {
        ParseFen("4k2r/8/8/8/8/8/8/4K3 w k - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50550);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(4);
    });
    test('ParseFen(r3k3/8/8/8/8/8/8/4K3 w q - 0 1)', () => {
        ParseFen("r3k3/8/8/8/8/8/8/4K3 w q - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50550);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(8);
    });
    test('ParseFen(4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1)', () => {
        ParseFen("4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(3);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/4K3 w kq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/4K3 w kq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(12);
    });
    test('ParseFen(8/8/8/8/8/8/6k1/4K2R w K - 0 1)', () => {
        ParseFen("8/8/8/8/8/8/6k1/4K2R w K - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 12, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50550);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(1);
    });
    test('ParseFen(8/8/8/8/8/8/1k6/R3K3 w Q - 0 1)', () => {
        ParseFen("8/8/8/8/8/8/1k6/R3K3 w Q - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 12, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50550);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(2);
    });
    test('ParseFen(4k2r/6K1/8/8/8/8/8/8 w k - 0 1)', () => {
        ParseFen("4k2r/6K1/8/8/8/8/8/8 w k - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 6, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50550);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(4);
    });
    test('ParseFen(r3k3/1K6/8/8/8/8/8/8 w q - 0 1)', () => {
        ParseFen("r3k3/1K6/8/8/8/8/8/8 w q - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 6, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50550);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(8);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(15);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/1R2K2R w Kkq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/1R2K2R w Kkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 4, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(13);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/2R1K2R w Kkq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/2R1K2R w Kkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 4, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(13);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/R3K1R1 w Qkq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/R3K1R1 w Qkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 4, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(14);
    });
    test('ParseFen(1r2k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1)', () => {
        ParseFen("1r2k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 10, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(7);
    });
    test('ParseFen(2r1k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1)', () => {
        ParseFen("2r1k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 10, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(7);
    });
    test('ParseFen(r3k1r1/8/8/8/8/8/8/R3K2R w KQq - 0 1)', () => {
        ParseFen("r3k1r1/8/8/8/8/8/8/R3K2R w KQq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 10, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(11);
    });
    test('ParseFen(4k3/8/8/8/8/8/8/4K2R b K - 0 1)', () => {
        ParseFen("4k3/8/8/8/8/8/8/4K2R b K - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50550);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(1);
    });
    test('ParseFen(4k3/8/8/8/8/8/8/R3K3 b Q - 0 1)', () => {
        ParseFen("4k3/8/8/8/8/8/8/R3K3 b Q - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50550);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(2);
    });
    test('ParseFen(4k2r/8/8/8/8/8/8/4K3 b k - 0 1)', () => {
        ParseFen("4k2r/8/8/8/8/8/8/4K3 b k - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50550);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(4);
    });
    test('ParseFen(r3k3/8/8/8/8/8/8/4K3 b q - 0 1)', () => {
        ParseFen("r3k3/8/8/8/8/8/8/4K3 b q - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50550);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(8);
    });
    test('ParseFen(4k3/8/8/8/8/8/8/R3K2R b KQ - 0 1)', () => {
        ParseFen("4k3/8/8/8/8/8/8/R3K2R b KQ - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(3);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/4K3 b kq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/4K3 b kq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(12);
    });
    test('ParseFen(8/8/8/8/8/8/6k1/4K2R b K - 0 1)', () => {
        ParseFen("8/8/8/8/8/8/6k1/4K2R b K - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 12, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50550);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(1);
    });
    test('ParseFen(8/8/8/8/8/8/1k6/R3K3 b Q - 0 1)', () => {
        ParseFen("8/8/8/8/8/8/1k6/R3K3 b Q - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 12, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50550);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(2);
    });
    test('ParseFen(4k2r/6K1/8/8/8/8/8/8 b k - 0 1)', () => {
        ParseFen("4k2r/6K1/8/8/8/8/8/8 b k - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 6, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50550);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(4);
    });
    test('ParseFen(r3k3/1K6/8/8/8/8/8/8 b q - 0 1)', () => {
        ParseFen("r3k3/1K6/8/8/8/8/8/8 b q - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 6, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50550);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(8);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/R3K2R b KQkq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/R3K2R b KQkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(15);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/1R2K2R b Kkq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/1R2K2R b Kkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 4, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(13);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/2R1K2R b Kkq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/2R1K2R b Kkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 4, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(13);
    });
    test('ParseFen(r3k2r/8/8/8/8/8/8/R3K1R1 b Qkq - 0 1)', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/R3K1R1 b Qkq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 4, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(14);
    });
    test('ParseFen(1r2k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1)', () => {
        ParseFen("1r2k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 10, 0, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(7);
    });
    test('ParseFen(2r1k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1)', () => {
        ParseFen("2r1k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 10, 0, 12, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(7);
    });
    test('ParseFen(r3k1r1/8/8/8/8/8/8/R3K2R b KQq - 0 1)', () => {
        ParseFen("r3k1r1/8/8/8/8/8/8/R3K2R b KQq - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 4, 0, 0, 0, 6, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 10, 0, 0, 0, 12, 0, 10, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(11);
    });
    test('ParseFen(8/1n4N1/2k5/8/8/5K2/1N4n1/8 w - - 0 1)', () => {
        ParseFen("8/1n4N1/2k5/8/8/5K2/1N4n1/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 2, 0, 0, 0, 0, 8, 0, 100, 100, 0, 0, 0, 0, 0, 6, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 12, 0, 0, 0, 0, 0, 100, 100, 0, 8, 0, 0, 0, 0, 2, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/1k6/8/5N2/8/4n3/8/2K5 w - - 0 1)', () => {
        ParseFen("8/1k6/8/5N2/8/4n3/8/2K5 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 6, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 8, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 2, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 12, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50325);
        expect(GameBoard.material[1]).toBe(50325);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/4k3/3Nn3/3nN3/4K3/8/8 w - - 0 1)', () => {
        ParseFen("8/8/4k3/3Nn3/3nN3/4K3/8/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 8, 2, 0, 0, 0, 100, 100, 0, 0, 0, 2, 8, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(K7/8/2n5/1n6/8/8/8/k6N w - - 0 1)', () => {
        ParseFen("K7/8/2n5/1n6/8/8/8/k6N w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 12, 0, 0, 0, 0, 0, 0, 2, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 8, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 8, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50325);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/2N5/1N6/8/8/8/K6n w - - 0 1)', () => {
        ParseFen("k7/8/2N5/1N6/8/8/8/K6n w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 8, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 2, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 2, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50325);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/1n4N1/2k5/8/8/5K2/1N4n1/8 b - - 0 1)', () => {
        ParseFen("8/1n4N1/2k5/8/8/5K2/1N4n1/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 2, 0, 0, 0, 0, 8, 0, 100, 100, 0, 0, 0, 0, 0, 6, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 12, 0, 0, 0, 0, 0, 100, 100, 0, 8, 0, 0, 0, 0, 2, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/1k6/8/5N2/8/4n3/8/2K5 b - - 0 1)', () => {
        ParseFen("8/1k6/8/5N2/8/4n3/8/2K5 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 6, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 8, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 2, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 12, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50325);
        expect(GameBoard.material[1]).toBe(50325);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/3K4/3Nn3/3nN3/4k3/8/8 b - - 0 1)', () => {
        ParseFen("8/8/3K4/3Nn3/3nN3/4k3/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 0, 0, 0, 8, 2, 0, 0, 0, 100, 100, 0, 0, 0, 2, 8, 0, 0, 0, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(K7/8/2n5/1n6/8/8/8/k6N b - - 0 1)', () => {
        ParseFen("K7/8/2n5/1n6/8/8/8/k6N b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 12, 0, 0, 0, 0, 0, 0, 2, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 8, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 8, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50325);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/2N5/1N6/8/8/8/K6n b - - 0 1)', () => {
        ParseFen("k7/8/2N5/1N6/8/8/8/K6n b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 8, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 2, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 2, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50325);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(B6b/8/8/8/2K5/4k3/8/b6B w - - 0 1)', () => {
        ParseFen("B6b/8/8/8/2K5/4k3/8/b6B w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 9, 0, 0, 0, 0, 0, 0, 3, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 0, 0, 6, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 3, 0, 0, 0, 0, 0, 0, 9, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/1B6/7b/7k/8/2B1b3/7K w - - 0 1)', () => {
        ParseFen("8/8/1B6/7b/7k/8/2B1b3/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 3, 0, 9, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 9, 100, 100, 0, 3, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/B7/1B6/1B6/8/8/8/K6b w - - 0 1)', () => {
        ParseFen("k7/B7/1B6/1B6/8/8/8/K6b w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 9, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 3, 0, 0, 0, 0, 0, 0, 100, 100, 0, 3, 0, 0, 0, 0, 0, 0, 100, 100, 3, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50975);
        expect(GameBoard.material[1]).toBe(50325);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(K7/b7/1b6/1b6/8/8/8/k6B w - - 0 1)', () => {
        ParseFen("K7/b7/1b6/1b6/8/8/8/k6B w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 12, 0, 0, 0, 0, 0, 0, 3, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 9, 0, 0, 0, 0, 0, 0, 100, 100, 0, 9, 0, 0, 0, 0, 0, 0, 100, 100, 9, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50325);
        expect(GameBoard.material[1]).toBe(50975);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(B6b/8/8/8/2K5/5k2/8/b6B b - - 0 1)', () => {
        ParseFen("B6b/8/8/8/2K5/5k2/8/b6B b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 9, 0, 0, 0, 0, 0, 0, 3, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 12, 0, 0, 100, 100, 0, 0, 6, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 3, 0, 0, 0, 0, 0, 0, 9, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/1B6/7b/7k/8/2B1b3/7K b - - 0 1)', () => {
        ParseFen("8/8/1B6/7b/7k/8/2B1b3/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 3, 0, 9, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 9, 100, 100, 0, 3, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50650);
        expect(GameBoard.material[1]).toBe(50650);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/B7/1B6/1B6/8/8/8/K6b b - - 0 1)', () => {
        ParseFen("k7/B7/1B6/1B6/8/8/8/K6b b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 9, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 3, 0, 0, 0, 0, 0, 0, 100, 100, 0, 3, 0, 0, 0, 0, 0, 0, 100, 100, 3, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50975);
        expect(GameBoard.material[1]).toBe(50325);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(K7/b7/1b6/1b6/8/8/8/k6B b - - 0 1)', () => {
        ParseFen("K7/b7/1b6/1b6/8/8/8/k6B b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 12, 0, 0, 0, 0, 0, 0, 3, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 9, 0, 0, 0, 0, 0, 0, 100, 100, 0, 9, 0, 0, 0, 0, 0, 0, 100, 100, 9, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50325);
        expect(GameBoard.material[1]).toBe(50975);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/RR6/8/8/8/8/rr6/7K w - - 0 1)', () => {
        ParseFen("7k/RR6/8/8/8/8/rr6/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 10, 10, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 4, 4, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(R6r/8/8/2K5/5k2/8/8/r6R w - - 0 1)', () => {
        ParseFen("R6r/8/8/2K5/5k2/8/8/r6R w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 10, 0, 0, 0, 0, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 12, 0, 0, 100, 100, 0, 0, 6, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 4, 0, 0, 0, 0, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/RR6/8/8/8/8/rr6/7K b - - 0 1)', () => {
        ParseFen("7k/RR6/8/8/8/8/rr6/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 10, 10, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 4, 4, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(R6r/8/8/2K5/5k2/8/8/r6R b - - 0 1)', () => {
        ParseFen("R6r/8/8/2K5/5k2/8/8/r6R b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 10, 0, 0, 0, 0, 0, 0, 4, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 12, 0, 0, 100, 100, 0, 0, 6, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 4, 0, 0, 0, 0, 0, 0, 10, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51100);
        expect(GameBoard.material[1]).toBe(51100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(6kq/8/8/8/8/8/8/7K w - - 0 1)', () => {
        ParseFen("6kq/8/8/8/8/8/8/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 12, 11, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(51000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(6KQ/8/8/8/8/8/8/7k b - - 0 1)', () => {
        ParseFen("6KQ/8/8/8/8/8/8/7k b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 6, 5, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51000);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(K7/8/8/3Q4/4q3/8/8/7k w - - 0 1)', () => {
        ParseFen("K7/8/8/3Q4/4q3/8/8/7k w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 11, 0, 0, 0, 100, 100, 0, 0, 0, 5, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51000);
        expect(GameBoard.material[1]).toBe(51000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(6qk/8/8/8/8/8/8/7K b - - 0 1)', () => {
        ParseFen("6qk/8/8/8/8/8/8/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 11, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(51000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(6KQ/8/8/8/8/8/8/7k b - - 0 1)', () => {
        ParseFen("6KQ/8/8/8/8/8/8/7k b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 6, 5, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51000);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(K7/8/8/3Q4/4q3/8/8/7k b - - 0 1)', () => {
        ParseFen("K7/8/8/3Q4/4q3/8/8/7k b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 11, 0, 0, 0, 100, 100, 0, 0, 0, 5, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(51000);
        expect(GameBoard.material[1]).toBe(51000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/8/8/8/K7/P7/k7 w - - 0 1)', () => {
        ParseFen("8/8/8/8/8/K7/P7/k7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/8/8/8/7K/7P/7k w - - 0 1)', () => {
        ParseFen("8/8/8/8/8/7K/7P/7k w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(K7/p7/k7/8/8/8/8/8 w - - 0 1)', () => {
        ParseFen("K7/p7/k7/8/8/8/8/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 7, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7K/7p/7k/8/8/8/8/8 w - - 0 1)', () => {
        ParseFen("7K/7p/7k/8/8/8/8/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/2k1p3/3pP3/3P2K1/8/8/8/8 w - - 0 1)', () => {
        ParseFen("8/2k1p3/3pP3/3P2K1/8/8/8/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 6, 0, 100, 100, 0, 0, 0, 7, 1, 0, 0, 0, 100, 100, 0, 0, 12, 0, 7, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50200);
        expect(GameBoard.material[1]).toBe(50200);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/8/8/8/K7/P7/k7 b - - 0 1)', () => {
        ParseFen("8/8/8/8/8/K7/P7/k7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/8/8/8/7K/7P/7k b - - 0 1)', () => {
        ParseFen("8/8/8/8/8/7K/7P/7k b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(K7/p7/k7/8/8/8/8/8 b - - 0 1)', () => {
        ParseFen("K7/p7/k7/8/8/8/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 7, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7K/7p/7k/8/8/8/8/8 b - - 0 1)', () => {
        ParseFen("7K/7p/7k/8/8/8/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/2k1p3/3pP3/3P2K1/8/8/8/8 b - - 0 1)', () => {
        ParseFen("8/2k1p3/3pP3/3P2K1/8/8/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 6, 0, 100, 100, 0, 0, 0, 7, 1, 0, 0, 0, 100, 100, 0, 0, 12, 0, 7, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50200);
        expect(GameBoard.material[1]).toBe(50200);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/8/8/8/4k3/4P3/4K3 w - - 0 1)', () => {
        ParseFen("8/8/8/8/8/4k3/4P3/4K3 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 1, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50000);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(4k3/4p3/4K3/8/8/8/8/8 b - - 0 1)', () => {
        ParseFen("4k3/4p3/4K3/8/8/8/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 6, 0, 0, 0, 100, 100, 0, 0, 0, 0, 7, 0, 0, 0, 100, 100, 0, 0, 0, 0, 12, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/7k/7p/7P/7K/8/8 w - - 0 1)', () => {
        ParseFen("8/8/7k/7p/7P/7K/8/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/k7/p7/P7/K7/8/8 w - - 0 1)', () => {
        ParseFen("8/8/k7/p7/P7/K7/8/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 0, 0, 0, 0, 0, 0, 0, 100, 100, 7, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/3k4/3p4/3P4/3K4/8/8 w - - 0 1)', () => {
        ParseFen("8/8/3k4/3p4/3P4/3K4/8/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 12, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/3k4/3p4/8/3P4/3K4/8/8 w - - 0 1)', () => {
        ParseFen("8/3k4/3p4/8/3P4/3K4/8/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 12, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/3k4/3p4/8/3P4/3K4/8 w - - 0 1)', () => {
        ParseFen("8/8/3k4/3p4/8/3P4/3K4/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 12, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/3p4/8/3P4/8/8/7K w - - 0 1)', () => {
        ParseFen("k7/8/3p4/8/3P4/8/8/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/7k/7p/7P/7K/8/8 b - - 0 1)', () => {
        ParseFen("8/8/7k/7p/7P/7K/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/k7/p7/P7/K7/8/8 b - - 0 1)', () => {
        ParseFen("8/8/k7/p7/P7/K7/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 0, 0, 0, 0, 0, 0, 0, 100, 100, 7, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/3k4/3p4/3P4/3K4/8/8 b - - 0 1)', () => {
        ParseFen("8/8/3k4/3p4/3P4/3K4/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 12, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/3k4/3p4/8/3P4/3K4/8/8 b - - 0 1)', () => {
        ParseFen("8/3k4/3p4/8/3P4/3K4/8/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 12, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/8/3k4/3p4/8/3P4/3K4/8 b - - 0 1)', () => {
        ParseFen("8/8/3k4/3p4/8/3P4/3K4/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 12, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/3p4/8/3P4/8/8/7K b - - 0 1)', () => {
        ParseFen("k7/8/3p4/8/3P4/8/8/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/3p4/8/8/3P4/8/8/K7 w - - 0 1)', () => {
        ParseFen("7k/3p4/8/8/3P4/8/8/K7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/8/3p4/8/8/3P4/K7 w - - 0 1)', () => {
        ParseFen("7k/8/8/3p4/8/8/3P4/K7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/8/7p/6P1/8/8/K7 w - - 0 1)', () => {
        ParseFen("k7/8/8/7p/6P1/8/8/K7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 1, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/7p/8/8/6P1/8/K7 w - - 0 1)', () => {
        ParseFen("k7/8/7p/8/8/6P1/8/K7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 1, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/8/6p1/7P/8/8/K7 w - - 0 1)', () => {
        ParseFen("k7/8/8/6p1/7P/8/8/K7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 7, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/6p1/8/8/7P/8/K7 w - - 0 1)', () => {
        ParseFen("k7/8/6p1/8/8/7P/8/K7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 7, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/8/3p4/4p3/8/8/7K w - - 0 1)', () => {
        ParseFen("k7/8/8/3p4/4p3/8/8/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 7, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50200);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/3p4/8/8/4P3/8/7K w - - 0 1)', () => {
        ParseFen("k7/8/3p4/8/8/4P3/8/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 1, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/3p4/8/8/3P4/8/8/K7 b - - 0 1)', () => {
        ParseFen("7k/3p4/8/8/3P4/8/8/K7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/8/3p4/8/8/3P4/K7 b - - 0 1)', () => {
        ParseFen("7k/8/8/3p4/8/8/3P4/K7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/8/7p/6P1/8/8/K7 b - - 0 1)', () => {
        ParseFen("k7/8/8/7p/6P1/8/8/K7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 1, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/7p/8/8/6P1/8/K7 b - - 0 1)', () => {
        ParseFen("k7/8/7p/8/8/6P1/8/K7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 1, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/8/6p1/7P/8/8/K7 b - - 0 1)', () => {
        ParseFen("k7/8/8/6p1/7P/8/8/K7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 7, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/6p1/8/8/7P/8/K7 b - - 0 1)', () => {
        ParseFen("k7/8/6p1/8/8/7P/8/K7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 7, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/8/3p4/4p3/8/8/7K b - - 0 1)', () => {
        ParseFen("k7/8/8/3p4/4p3/8/8/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 7, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50000);
        expect(GameBoard.material[1]).toBe(50200);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/8/3p4/8/8/4P3/8/7K b - - 0 1)', () => {
        ParseFen("k7/8/3p4/8/8/4P3/8/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 1, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/8/p7/1P6/8/8/7K w - - 0 1)', () => {
        ParseFen("7k/8/8/p7/1P6/8/8/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 1, 0, 0, 0, 0, 0, 0, 100, 100, 7, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/p7/8/8/1P6/8/7K w - - 0 1)', () => {
        ParseFen("7k/8/p7/8/8/1P6/8/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 1, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 7, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/8/1p6/P7/8/8/7K w - - 0 1)', () => {
        ParseFen("7k/8/8/1p6/P7/8/8/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 7, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/1p6/8/8/P7/8/7K w - - 0 1)', () => {
        ParseFen("7k/8/1p6/8/8/P7/8/7K w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 7, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/7p/8/8/8/8/6P1/K7 w - - 0 1)', () => {
        ParseFen("k7/7p/8/8/8/8/6P1/K7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 1, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/6p1/8/8/8/8/7P/K7 w - - 0 1)', () => {
        ParseFen("k7/6p1/8/8/8/8/7P/K7 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 7, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(3k4/3pp3/8/8/8/8/3PP3/3K4 w - - 0 1)', () => {
        ParseFen("3k4/3pp3/8/8/8/8/3PP3/3K4 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 1, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 7, 0, 0, 0, 100, 100, 0, 0, 0, 12, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50200);
        expect(GameBoard.material[1]).toBe(50200);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/8/p7/1P6/8/8/7K b - - 0 1)', () => {
        ParseFen("7k/8/8/p7/1P6/8/8/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 1, 0, 0, 0, 0, 0, 0, 100, 100, 7, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/p7/8/8/1P6/8/7K b - - 0 1)', () => {
        ParseFen("7k/8/p7/8/8/1P6/8/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 1, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 7, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/8/1p6/P7/8/8/7K b - - 0 1)', () => {
        ParseFen("7k/8/8/1p6/P7/8/8/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 7, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(7k/8/1p6/8/8/P7/8/7K b - - 0 1)', () => {
        ParseFen("7k/8/1p6/8/8/P7/8/7K b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 6, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 7, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 12, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/7p/8/8/8/8/6P1/K7 b - - 0 1)', () => {
        ParseFen("k7/7p/8/8/8/8/6P1/K7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 1, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 7, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(k7/6p1/8/8/8/8/7P/K7 b - - 0 1)', () => {
        ParseFen("k7/6p1/8/8/8/8/7P/K7 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 1, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 7, 0, 100, 100, 12, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(3k4/3pp3/8/8/8/8/3PP3/3K4 b - - 0 1)', () => {
        ParseFen("3k4/3pp3/8/8/8/8/3PP3/3K4 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 6, 0, 0, 0, 0, 100, 100, 0, 0, 0, 1, 1, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 7, 7, 0, 0, 0, 100, 100, 0, 0, 0, 12, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50200);
        expect(GameBoard.material[1]).toBe(50200);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/Pk6/8/8/8/8/6Kp/8 w - - 0 1)', () => {
        ParseFen("8/Pk6/8/8/8/8/6Kp/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 6, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 12, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(n1n5/1Pk5/8/8/8/8/5Kp1/5N1N w - - 0 1)', () => {
        ParseFen("n1n5/1Pk5/8/8/8/8/5Kp1/5N1N w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 2, 0, 2, 100, 100, 0, 0, 0, 0, 0, 6, 7, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 1, 12, 0, 0, 0, 0, 0, 100, 100, 8, 0, 8, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50750);
        expect(GameBoard.material[1]).toBe(50750);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/PPPk4/8/8/8/8/4Kppp/8 w - - 0 1)', () => {
        ParseFen("8/PPPk4/8/8/8/8/4Kppp/8 w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 6, 7, 7, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 1, 1, 12, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50300);
        expect(GameBoard.material[1]).toBe(50300);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(n1n5/PPPk4/8/8/8/8/4Kppp/5N1N w - - 0 1)', () => {
        ParseFen("n1n5/PPPk4/8/8/8/8/4Kppp/5N1N w - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 2, 0, 2, 100, 100, 0, 0, 0, 0, 6, 7, 7, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 1, 1, 12, 0, 0, 0, 0, 100, 100, 8, 0, 8, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50950);
        expect(GameBoard.material[1]).toBe(50950);
        expect(GameBoard.side).toBe(0);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/Pk6/8/8/8/8/6Kp/8 b - - 0 1)', () => {
        ParseFen("8/Pk6/8/8/8/8/6Kp/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 6, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 12, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50100);
        expect(GameBoard.material[1]).toBe(50100);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(n1n5/1Pk5/8/8/8/8/5Kp1/5N1N b - - 0 1)', () => {
        ParseFen("n1n5/1Pk5/8/8/8/8/5Kp1/5N1N b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 2, 0, 2, 100, 100, 0, 0, 0, 0, 0, 6, 7, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 1, 12, 0, 0, 0, 0, 0, 100, 100, 8, 0, 8, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50750);
        expect(GameBoard.material[1]).toBe(50750);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(8/PPPk4/8/8/8/8/4Kppp/8 b - - 0 1)', () => {
        ParseFen("8/PPPk4/8/8/8/8/4Kppp/8 b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 6, 7, 7, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 1, 1, 12, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50300);
        expect(GameBoard.material[1]).toBe(50300);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
    });
    test('ParseFen(n1n5/PPPk4/8/8/8/8/4Kppp/5N1N b - - 0 1)', () => {
        ParseFen("n1n5/PPPk4/8/8/8/8/4Kppp/5N1N b - - 0 1");
        const testArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 2, 0, 2, 100, 100, 0, 0, 0, 0, 6, 7, 7, 7, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 1, 1, 1, 12, 0, 0, 0, 0, 100, 100, 8, 0, 8, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
        expect(GameBoard.pieces).toStrictEqual(testArr);
        expect(GameBoard.material[0]).toBe(50950);
        expect(GameBoard.material[1]).toBe(50950);
        expect(GameBoard.side).toBe(1);
        expect(GameBoard.castlePermission).toBe(0);
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