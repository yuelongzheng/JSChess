import { Definitions } from "./defs.js"
import { InOut } from "./io.js";
import { GameBoard } from "./board.js";
import { MoveGeneration } from "./movegen.js";
import { ManiupulatePiece } from "./makemove.js";
import { perft } from "./perft.js";

let defs = new Definitions();
let io = new InOut(defs);
let board = new GameBoard(defs, io);
let moveGen = new MoveGeneration(defs);
let manPiece = new ManiupulatePiece(defs);
let pt = new perft(defs, board, manPiece, moveGen, io);
// supress console.log
const consoleLog = console.log;
console.log = jest.fn();

describe("perft", () => {
    test('pt.PerftTest(5) to be 4865609', () => {
        board.ParseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
        expect(pt.PerftTest(5)).toBe(4865609);
    });
    test('pt.PerftTest(5) to be 193690690', () => {
        board.ParseFen("r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1");
        expect(pt.PerftTest(5)).toBe(193690690
    );
    });
    test('pt.PerftTest(5) to be 133987', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/4K2R w K - 0 1");
        expect(pt.PerftTest(5)).toBe(133987);
    });
    test('pt.PerftTest(5) to be 145232', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/R3K3 w Q - 0 1");
        expect(pt.PerftTest(5)).toBe(145232);
    });
    test('pt.PerftTest(5) to be 47635', () => {
        board.ParseFen("4k2r/8/8/8/8/8/8/4K3 w k - 0 1");
        expect(pt.PerftTest(5)).toBe(47635);
    });
    test('pt.PerftTest(5) to be 52710', () => {
        board.ParseFen("r3k3/8/8/8/8/8/8/4K3 w q - 0 1");
        expect(pt.PerftTest(5)).toBe(52710);
    });
    test('pt.PerftTest(5) to be 532933', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1");
        expect(pt.PerftTest(5)).toBe(532933);
    });
    test('pt.PerftTest(5) to be 118882', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/4K3 w kq - 0 1");
        expect(pt.PerftTest(5)).toBe(118882);
    });
    test('pt.PerftTest(5) to be 37735', () => {
        board.ParseFen("8/8/8/8/8/8/6k1/4K2R w K - 0 1");
        expect(pt.PerftTest(5)).toBe(37735);
    });
    test('pt.PerftTest(5) to be 80619', () => {
        board.ParseFen("8/8/8/8/8/8/1k6/R3K3 w Q - 0 1");
        expect(pt.PerftTest(5)).toBe(80619);
    });
    test('pt.PerftTest(5) to be 10485', () => {
        board.ParseFen("4k2r/6K1/8/8/8/8/8/8 w k - 0 1");
        expect(pt.PerftTest(5)).toBe(10485);
    });
    test('pt.PerftTest(5) to be 20780', () => {
        board.ParseFen("r3k3/1K6/8/8/8/8/8/8 w q - 0 1");
        expect(pt.PerftTest(5)).toBe(20780);
    });
    test('pt.PerftTest(5) to be 7594526', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1");
        expect(pt.PerftTest(5)).toBe(7594526);
    });
    test('pt.PerftTest(5) to be 8153719', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/1R2K2R w Kkq - 0 1");
        expect(pt.PerftTest(5)).toBe(8153719);
    });
    test('pt.PerftTest(5) to be 7736373', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/2R1K2R w Kkq - 0 1");
        expect(pt.PerftTest(5)).toBe(7736373);
    });
    test('pt.PerftTest(5) to be 7878456', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/R3K1R1 w Qkq - 0 1");
        expect(pt.PerftTest(5)).toBe(7878456);
    });
    test('pt.PerftTest(5) to be 8198901', () => {
        board.ParseFen("1r2k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1");
        expect(pt.PerftTest(5)).toBe(8198901);
    });
    test('pt.PerftTest(5) to be 7710115', () => {
        board.ParseFen("2r1k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1");
        expect(pt.PerftTest(5)).toBe(7710115);
    });
    test('pt.PerftTest(5) to be 7848606', () => {
        board.ParseFen("r3k1r1/8/8/8/8/8/8/R3K2R w KQq - 0 1");
        expect(pt.PerftTest(5)).toBe(7848606);
    });
    test('pt.PerftTest(5) to be 47635', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/4K2R b K - 0 1");
        expect(pt.PerftTest(5)).toBe(47635);
    });
    test('pt.PerftTest(5) to be 52710', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/R3K3 b Q - 0 1");
        expect(pt.PerftTest(5)).toBe(52710);
    });
    test('pt.PerftTest(5) to be 133987', () => {
        board.ParseFen("4k2r/8/8/8/8/8/8/4K3 b k - 0 1");
        expect(pt.PerftTest(5)).toBe(133987);
    });
    test('pt.PerftTest(5) to be 145232', () => {
        board.ParseFen("r3k3/8/8/8/8/8/8/4K3 b q - 0 1");
        expect(pt.PerftTest(5)).toBe(145232);
    });
    test('pt.PerftTest(5) to be 118882', () => {
        board.ParseFen("4k3/8/8/8/8/8/8/R3K2R b KQ - 0 1");
        expect(pt.PerftTest(5)).toBe(118882);
    });
    test('pt.PerftTest(5) to be 532933', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/4K3 b kq - 0 1");
        expect(pt.PerftTest(5)).toBe(532933);
    });
    test('pt.PerftTest(5) to be 10485', () => {
        board.ParseFen("8/8/8/8/8/8/6k1/4K2R b K - 0 1");
        expect(pt.PerftTest(5)).toBe(10485);
    });
    test('pt.PerftTest(5) to be 20780', () => {
        board.ParseFen("8/8/8/8/8/8/1k6/R3K3 b Q - 0 1");
        expect(pt.PerftTest(5)).toBe(20780);
    });
    test('pt.PerftTest(5) to be 37735', () => {
        board.ParseFen("4k2r/6K1/8/8/8/8/8/8 b k - 0 1");
        expect(pt.PerftTest(5)).toBe(37735);
    });
    test('pt.PerftTest(5) to be 80619', () => {
        board.ParseFen("r3k3/1K6/8/8/8/8/8/8 b q - 0 1");
        expect(pt.PerftTest(5)).toBe(80619);
    });
    test('pt.PerftTest(5) to be 7594526', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/R3K2R b KQkq - 0 1");
        expect(pt.PerftTest(5)).toBe(7594526);
    });
    test('pt.PerftTest(5) to be 8198901', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/1R2K2R b Kkq - 0 1");
        expect(pt.PerftTest(5)).toBe(8198901);
    });
    test('pt.PerftTest(5) to be 7710115', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/2R1K2R b Kkq - 0 1");
        expect(pt.PerftTest(5)).toBe(7710115);
    });
    test('pt.PerftTest(5) to be 7848606', () => {
        board.ParseFen("r3k2r/8/8/8/8/8/8/R3K1R1 b Qkq - 0 1");
        expect(pt.PerftTest(5)).toBe(7848606);
    });
    test('pt.PerftTest(5) to be 8153719', () => {
        board.ParseFen("1r2k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1");
        expect(pt.PerftTest(5)).toBe(8153719);
    });
    test('pt.PerftTest(5) to be 7736373', () => {
        board.ParseFen("2r1k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1");
        expect(pt.PerftTest(5)).toBe(7736373);
    });
    test('pt.PerftTest(5) to be 7878456', () => {
        board.ParseFen("r3k1r1/8/8/8/8/8/8/R3K2R b KQq - 0 1");
        expect(pt.PerftTest(5)).toBe(7878456);
    });
    test('pt.PerftTest(5) to be 570726', () => {
        board.ParseFen("8/1n4N1/2k5/8/8/5K2/1N4n1/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(570726);
    });
    test('pt.PerftTest(5) to be 223507', () => {
        board.ParseFen("8/1k6/8/5N2/8/4n3/8/2K5 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(223507);
    });
    test('pt.PerftTest(5) to be 1198299', () => {
        board.ParseFen("8/8/4k3/3Nn3/3nN3/4K3/8/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1198299);
    });
    test('pt.PerftTest(5) to be 38348', () => {
        board.ParseFen("K7/8/2n5/1n6/8/8/8/k6N w - - 0 1");
        expect(pt.PerftTest(5)).toBe(38348);
    });
    test('pt.PerftTest(5) to be 92250', () => {
        board.ParseFen("k7/8/2N5/1N6/8/8/8/K6n w - - 0 1");
        expect(pt.PerftTest(5)).toBe(92250);
    });
    test('pt.PerftTest(5) to be 582642', () => {
        board.ParseFen("8/1n4N1/2k5/8/8/5K2/1N4n1/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(582642);
    });
    test('pt.PerftTest(5) to be 288141', () => {
        board.ParseFen("8/1k6/8/5N2/8/4n3/8/2K5 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(288141);
    });
    test('pt.PerftTest(5) to be 281190', () => {
        board.ParseFen("8/8/3K4/3Nn3/3nN3/4k3/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(281190);
    });
    test('pt.PerftTest(5) to be 92250', () => {
        board.ParseFen("K7/8/2n5/1n6/8/8/8/k6N b - - 0 1");
        expect(pt.PerftTest(5)).toBe(92250);
    });
    test('pt.PerftTest(5) to be 38348', () => {
        board.ParseFen("k7/8/2N5/1N6/8/8/8/K6n b - - 0 1");
        expect(pt.PerftTest(5)).toBe(38348);
    });
    test('pt.PerftTest(5) to be 1320507', () => {
        board.ParseFen("B6b/8/8/8/2K5/4k3/8/b6B w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1320507);
    });
    test('pt.PerftTest(5) to be 1713368', () => {
        board.ParseFen("8/8/1B6/7b/7k/8/2B1b3/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1713368);
    });
    test('pt.PerftTest(5) to be 787524', () => {
        board.ParseFen("k7/B7/1B6/1B6/8/8/8/K6b w - - 0 1");
        expect(pt.PerftTest(5)).toBe(787524);
    });
    test('pt.PerftTest(5) to be 310862', () => {
        board.ParseFen("K7/b7/1b6/1b6/8/8/8/k6B w - - 0 1");
        expect(pt.PerftTest(5)).toBe(310862);
    });
    test('pt.PerftTest(5) to be 530585', () => {
        board.ParseFen("B6b/8/8/8/2K5/5k2/8/b6B b - - 0 1");
        expect(pt.PerftTest(5)).toBe(530585);
    });
    test('pt.PerftTest(5) to be 1591064', () => {
        board.ParseFen("8/8/1B6/7b/7k/8/2B1b3/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(1591064);
    });
    test('pt.PerftTest(5) to be 310862', () => {
        board.ParseFen("k7/B7/1B6/1B6/8/8/8/K6b b - - 0 1");
        expect(pt.PerftTest(5)).toBe(310862);
    });
    test('pt.PerftTest(5) to be 787524', () => {
        board.ParseFen("K7/b7/1b6/1b6/8/8/8/k6B b - - 0 1");
        expect(pt.PerftTest(5)).toBe(787524);
    });
    test('pt.PerftTest(5) to be 2161211', () => {
        board.ParseFen("7k/RR6/8/8/8/8/rr6/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(2161211);
    });
    test('pt.PerftTest(5) to be 20506480', () => {
        board.ParseFen("R6r/8/8/2K5/5k2/8/8/r6R w - - 0 1");
        expect(pt.PerftTest(5)).toBe(20506480);
    });
    test('pt.PerftTest(5) to be 2161211', () => {
        board.ParseFen("7k/RR6/8/8/8/8/rr6/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(2161211);
    });
    test('pt.PerftTest(5) to be 20521342', () => {
        board.ParseFen("R6r/8/8/2K5/5k2/8/8/r6R b - - 0 1");
        expect(pt.PerftTest(5)).toBe(20521342);
    });
    test('pt.PerftTest(5) to be 14893', () => {
        board.ParseFen("6kq/8/8/8/8/8/8/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(14893);
    });
    test('pt.PerftTest(5) to be 14893', () => {
        board.ParseFen("6KQ/8/8/8/8/8/8/7k b - - 0 1");
        expect(pt.PerftTest(5)).toBe(14893);
    });
    test('pt.PerftTest(5) to be 166741', () => {
        board.ParseFen("K7/8/8/3Q4/4q3/8/8/7k w - - 0 1");
        expect(pt.PerftTest(5)).toBe(166741);
    });
    test('pt.PerftTest(5) to be 105749', () => {
        board.ParseFen("6qk/8/8/8/8/8/8/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(105749);
    });
    test('pt.PerftTest(5) to be 14893', () => {
        board.ParseFen("6KQ/8/8/8/8/8/8/7k b - - 0 1");
        expect(pt.PerftTest(5)).toBe(14893);
    });
    test('pt.PerftTest(5) to be 166741', () => {
        board.ParseFen("K7/8/8/3Q4/4q3/8/8/7k b - - 0 1");
        expect(pt.PerftTest(5)).toBe(166741);
    });
    test('pt.PerftTest(5) to be 1347', () => {
        board.ParseFen("8/8/8/8/8/K7/P7/k7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1347);
    });
    test('pt.PerftTest(5) to be 1347', () => {
        board.ParseFen("8/8/8/8/8/7K/7P/7k w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1347);
    });
    test('pt.PerftTest(5) to be 342', () => {
        board.ParseFen("K7/p7/k7/8/8/8/8/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(342);
    });
    test('pt.PerftTest(5) to be 342', () => {
        board.ParseFen("7K/7p/7k/8/8/8/8/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(342);
    });
    test('pt.PerftTest(5) to be 7028', () => {
        board.ParseFen("8/2k1p3/3pP3/3P2K1/8/8/8/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(7028);
    });
    test('pt.PerftTest(5) to be 342', () => {
        board.ParseFen("8/8/8/8/8/K7/P7/k7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(342);
    });
    test('pt.PerftTest(5) to be 342', () => {
        board.ParseFen("8/8/8/8/8/7K/7P/7k b - - 0 1");
        expect(pt.PerftTest(5)).toBe(342);
    });
    test('pt.PerftTest(5) to be 1347', () => {
        board.ParseFen("K7/p7/k7/8/8/8/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(1347);
    });
    test('pt.PerftTest(5) to be 1347', () => {
        board.ParseFen("7K/7p/7k/8/8/8/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(1347);
    });
    test('pt.PerftTest(5) to be 5408', () => {
        board.ParseFen("8/2k1p3/3pP3/3P2K1/8/8/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(5408);
    });
    test('pt.PerftTest(5) to be 1814', () => {
        board.ParseFen("8/8/8/8/8/4k3/4P3/4K3 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1814);
    });
    test('pt.PerftTest(5) to be 1814', () => {
        board.ParseFen("4k3/4p3/4K3/8/8/8/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(1814);
    });
    test('pt.PerftTest(5) to be 1969', () => {
        board.ParseFen("8/8/7k/7p/7P/7K/8/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1969);
    });
    test('pt.PerftTest(5) to be 1969', () => {
        board.ParseFen("8/8/k7/p7/P7/K7/8/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1969);
    });
    test('pt.PerftTest(5) to be 8296', () => {
        board.ParseFen("8/8/3k4/3p4/3P4/3K4/8/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(8296);
    });
    test('pt.PerftTest(5) to be 23599', () => {
        board.ParseFen("8/3k4/3p4/8/3P4/3K4/8/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(23599);
    });
    test('pt.PerftTest(5) to be 21637', () => {
        board.ParseFen("8/8/3k4/3p4/8/3P4/3K4/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(21637);
    });
    test('pt.PerftTest(5) to be 3450', () => {
        board.ParseFen("k7/8/3p4/8/3P4/8/8/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(3450);
    });
    test('pt.PerftTest(5) to be 1969', () => {
        board.ParseFen("8/8/7k/7p/7P/7K/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(1969);
    });
    test('pt.PerftTest(5) to be 1969', () => {
        board.ParseFen("8/8/k7/p7/P7/K7/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(1969);
    });
    test('pt.PerftTest(5) to be 8296', () => {
        board.ParseFen("8/8/3k4/3p4/3P4/3K4/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(8296);
    });
    test('pt.PerftTest(5) to be 21637', () => {
        board.ParseFen("8/3k4/3p4/8/3P4/3K4/8/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(21637);
    });
    test('pt.PerftTest(5) to be 23599', () => {
        board.ParseFen("8/8/3k4/3p4/8/3P4/3K4/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(23599);
    });
    test('pt.PerftTest(5) to be 3309', () => {
        board.ParseFen("k7/8/3p4/8/3P4/8/8/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(3309);
    });
    test('pt.PerftTest(5) to be 4661', () => {
        board.ParseFen("7k/3p4/8/8/3P4/8/8/K7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(4661);
    });
    test('pt.PerftTest(5) to be 4786', () => {
        board.ParseFen("7k/8/8/3p4/8/8/3P4/K7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(4786);
    });
    test('pt.PerftTest(5) to be 6112', () => {
        board.ParseFen("k7/8/8/7p/6P1/8/8/K7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(6112);
    });
    test('pt.PerftTest(5) to be 4354', () => {
        board.ParseFen("k7/8/7p/8/8/6P1/8/K7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(4354);
    });
    test('pt.PerftTest(5) to be 6112', () => {
        board.ParseFen("k7/8/8/6p1/7P/8/8/K7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(6112);
    });
    test('pt.PerftTest(5) to be 4354', () => {
        board.ParseFen("k7/8/6p1/8/8/7P/8/K7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(4354);
    });
    test('pt.PerftTest(5) to be 3013', () => {
        board.ParseFen("k7/8/8/3p4/4p3/8/8/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(3013);
    });
    test('pt.PerftTest(5) to be 4271', () => {
        board.ParseFen("k7/8/3p4/8/8/4P3/8/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(4271);
    });
    test('pt.PerftTest(5) to be 5014', () => {
        board.ParseFen("7k/3p4/8/8/3P4/8/8/K7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(5014);
    });
    test('pt.PerftTest(5) to be 4658', () => {
        board.ParseFen("7k/8/8/3p4/8/8/3P4/K7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(4658);
    });
    test('pt.PerftTest(5) to be 6112', () => {
        board.ParseFen("k7/8/8/7p/6P1/8/8/K7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(6112);
    });
    test('pt.PerftTest(5) to be 4354', () => {
        board.ParseFen("k7/8/7p/8/8/6P1/8/K7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(4354);
    });
    test('pt.PerftTest(5) to be 6112', () => {
        board.ParseFen("k7/8/8/6p1/7P/8/8/K7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(6112);
    });
    test('pt.PerftTest(5) to be 4354', () => {
        board.ParseFen("k7/8/6p1/8/8/7P/8/K7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(4354);
    });
    test('pt.PerftTest(5) to be 4337', () => {
        board.ParseFen("k7/8/8/3p4/4p3/8/8/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(4337);
    });
    test('pt.PerftTest(5) to be 4271', () => {
        board.ParseFen("k7/8/3p4/8/8/4P3/8/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(4271);
    });
    test('pt.PerftTest(5) to be 6112', () => {
        board.ParseFen("7k/8/8/p7/1P6/8/8/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(6112);
    });
    test('pt.PerftTest(5) to be 4354', () => {
        board.ParseFen("7k/8/p7/8/8/1P6/8/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(4354);
    });
    test('pt.PerftTest(5) to be 6112', () => {
        board.ParseFen("7k/8/8/1p6/P7/8/8/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(6112);
    });
    test('pt.PerftTest(5) to be 4354', () => {
        board.ParseFen("7k/8/1p6/8/8/P7/8/7K w - - 0 1");
        expect(pt.PerftTest(5)).toBe(4354);
    });
    test('pt.PerftTest(5) to be 7574', () => {
        board.ParseFen("k7/7p/8/8/8/8/6P1/K7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(7574);
    });
    test('pt.PerftTest(5) to be 7574', () => {
        board.ParseFen("k7/6p1/8/8/8/8/7P/K7 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(7574);
    });
    test('pt.PerftTest(5) to be 24122', () => {
        board.ParseFen("3k4/3pp3/8/8/8/8/3PP3/3K4 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(24122);
    });
    test('pt.PerftTest(5) to be 6112', () => {
        board.ParseFen("7k/8/8/p7/1P6/8/8/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(6112);
    });
    test('pt.PerftTest(5) to be 4354', () => {
        board.ParseFen("7k/8/p7/8/8/1P6/8/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(4354);
    });
    test('pt.PerftTest(5) to be 6112', () => {
        board.ParseFen("7k/8/8/1p6/P7/8/8/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(6112);
    });
    test('pt.PerftTest(5) to be 4354', () => {
        board.ParseFen("7k/8/1p6/8/8/P7/8/7K b - - 0 1");
        expect(pt.PerftTest(5)).toBe(4354);
    });
    test('pt.PerftTest(5) to be 7574', () => {
        board.ParseFen("k7/7p/8/8/8/8/6P1/K7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(7574);
    });
    test('pt.PerftTest(5) to be 7574', () => {
        board.ParseFen("k7/6p1/8/8/8/8/7P/K7 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(7574);
    });
    test('pt.PerftTest(5) to be 24122', () => {
        board.ParseFen("3k4/3pp3/8/8/8/8/3PP3/3K4 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(24122);
    });
    test('pt.PerftTest(5) to be 90606', () => {
        board.ParseFen("8/Pk6/8/8/8/8/6Kp/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(90606);
    });
    test('pt.PerftTest(5) to be 2193768', () => {
        board.ParseFen("n1n5/1Pk5/8/8/8/8/5Kp1/5N1N w - - 0 1");
        expect(pt.PerftTest(5)).toBe(2193768);
    });
    test('pt.PerftTest(5) to be 1533145', () => {
        board.ParseFen("8/PPPk4/8/8/8/8/4Kppp/8 w - - 0 1");
        expect(pt.PerftTest(5)).toBe(1533145);
    });
    test('pt.PerftTest(5) to be 3605103', () => {
        board.ParseFen("n1n5/PPPk4/8/8/8/8/4Kppp/5N1N w - - 0 1");
        expect(pt.PerftTest(5)).toBe(3605103);
    });
    test('pt.PerftTest(5) to be 90606', () => {
        board.ParseFen("8/Pk6/8/8/8/8/6Kp/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(90606);
    });
    test('pt.PerftTest(5) to be 2193768', () => {
        board.ParseFen("n1n5/1Pk5/8/8/8/8/5Kp1/5N1N b - - 0 1");
        expect(pt.PerftTest(5)).toBe(2193768);
    });
    test('pt.PerftTest(5) to be 1533145', () => {
        board.ParseFen("8/PPPk4/8/8/8/8/4Kppp/8 b - - 0 1");
        expect(pt.PerftTest(5)).toBe(1533145);
    });
    test('pt.PerftTest(5) to be 3605103', () => {
        board.ParseFen("n1n5/PPPk4/8/8/8/8/4Kppp/5N1N b - - 0 1");
        expect(pt.PerftTest(5)).toBe(3605103);
    });
});