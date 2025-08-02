const { GameBoard, ParseFen } = require("../src/board");
const { PerftTest } = require("../src/perft");


// supress console.log
const consoleLog = console.log;
console.log = jest.fn();

describe("perft", () => {
    test('PerftTest(5) to be 4865609', () => {
        ParseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
        expect(PerftTest(5)).toBe(4865609);
    });
    test('PerftTest(5) to be 193690690', () => {
        ParseFen("r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1");
        expect(PerftTest(5)).toBe(193690690);
    });
    test('PerftTest(5) to be 133987', () => {
        ParseFen("4k3/8/8/8/8/8/8/4K2R w K - 0 1");
        expect(PerftTest(5)).toBe(133987);
    });
    test('PerftTest(5) to be 145232', () => {
        ParseFen("4k3/8/8/8/8/8/8/R3K3 w Q - 0 1");
        expect(PerftTest(5)).toBe(145232);
    });
    test('PerftTest(5) to be 47635', () => {
        ParseFen("4k2r/8/8/8/8/8/8/4K3 w k - 0 1");
        expect(PerftTest(5)).toBe(47635);
    });
    test('PerftTest(5) to be 52710', () => {
        ParseFen("r3k3/8/8/8/8/8/8/4K3 w q - 0 1");
        expect(PerftTest(5)).toBe(52710);
    });
    test('PerftTest(5) to be 532933', () => {
        ParseFen("4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1");
        expect(PerftTest(5)).toBe(532933);
    });
    test('PerftTest(5) to be 118882', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/4K3 w kq - 0 1");
        expect(PerftTest(5)).toBe(118882);
    });
    test('PerftTest(5) to be 37735', () => {
        ParseFen("8/8/8/8/8/8/6k1/4K2R w K - 0 1");
        expect(PerftTest(5)).toBe(37735);
    });
    test('PerftTest(5) to be 80619', () => {
        ParseFen("8/8/8/8/8/8/1k6/R3K3 w Q - 0 1");
        expect(PerftTest(5)).toBe(80619);
    });
    test('PerftTest(5) to be 10485', () => {
        ParseFen("4k2r/6K1/8/8/8/8/8/8 w k - 0 1");
        expect(PerftTest(5)).toBe(10485);
    });
    test('PerftTest(5) to be 20780', () => {
        ParseFen("r3k3/1K6/8/8/8/8/8/8 w q - 0 1");
        expect(PerftTest(5)).toBe(20780);
    });
    test('PerftTest(5) to be 7594526', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1");
        expect(PerftTest(5)).toBe(7594526);
    });
    test('PerftTest(5) to be 8153719', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/1R2K2R w Kkq - 0 1");
        expect(PerftTest(5)).toBe(8153719);
    });
    test('PerftTest(5) to be 7736373', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/2R1K2R w Kkq - 0 1");
        expect(PerftTest(5)).toBe(7736373);
    });
    test('PerftTest(5) to be 7878456', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/R3K1R1 w Qkq - 0 1");
        expect(PerftTest(5)).toBe(7878456);
    });
    test('PerftTest(5) to be 8198901', () => {
        ParseFen("1r2k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1");
        expect(PerftTest(5)).toBe(8198901);
    });
    test('PerftTest(5) to be 7710115', () => {
        ParseFen("2r1k2r/8/8/8/8/8/8/R3K2R w KQk - 0 1");
        expect(PerftTest(5)).toBe(7710115);
    });
    test('PerftTest(5) to be 7848606', () => {
        ParseFen("r3k1r1/8/8/8/8/8/8/R3K2R w KQq - 0 1");
        expect(PerftTest(5)).toBe(7848606);
    });
    test('PerftTest(5) to be 47635', () => {
        ParseFen("4k3/8/8/8/8/8/8/4K2R b K - 0 1");
        expect(PerftTest(5)).toBe(47635);
    });
    test('PerftTest(5) to be 52710', () => {
        ParseFen("4k3/8/8/8/8/8/8/R3K3 b Q - 0 1");
        expect(PerftTest(5)).toBe(52710);
    });
    test('PerftTest(5) to be 133987', () => {
        ParseFen("4k2r/8/8/8/8/8/8/4K3 b k - 0 1");
        expect(PerftTest(5)).toBe(133987);
    });
    test('PerftTest(5) to be 145232', () => {
        ParseFen("r3k3/8/8/8/8/8/8/4K3 b q - 0 1");
        expect(PerftTest(5)).toBe(145232);
    });
    test('PerftTest(5) to be 118882', () => {
        ParseFen("4k3/8/8/8/8/8/8/R3K2R b KQ - 0 1");
        expect(PerftTest(5)).toBe(118882);
    });
    test('PerftTest(5) to be 532933', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/4K3 b kq - 0 1");
        expect(PerftTest(5)).toBe(532933);
    });
    test('PerftTest(5) to be 10485', () => {
        ParseFen("8/8/8/8/8/8/6k1/4K2R b K - 0 1");
        expect(PerftTest(5)).toBe(10485);
    });
    test('PerftTest(5) to be 20780', () => {
        ParseFen("8/8/8/8/8/8/1k6/R3K3 b Q - 0 1");
        expect(PerftTest(5)).toBe(20780);
    });
    test('PerftTest(5) to be 37735', () => {
        ParseFen("4k2r/6K1/8/8/8/8/8/8 b k - 0 1");
        expect(PerftTest(5)).toBe(37735);
    });
    test('PerftTest(5) to be 80619', () => {
        ParseFen("r3k3/1K6/8/8/8/8/8/8 b q - 0 1");
        expect(PerftTest(5)).toBe(80619);
    });
    test('PerftTest(5) to be 7594526', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/R3K2R b KQkq - 0 1");
        expect(PerftTest(5)).toBe(7594526);
    });
    test('PerftTest(5) to be 8198901', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/1R2K2R b Kkq - 0 1");
        expect(PerftTest(5)).toBe(8198901);
    });
    test('PerftTest(5) to be 7710115', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/2R1K2R b Kkq - 0 1");
        expect(PerftTest(5)).toBe(7710115);
    });
    test('PerftTest(5) to be 7848606', () => {
        ParseFen("r3k2r/8/8/8/8/8/8/R3K1R1 b Qkq - 0 1");
        expect(PerftTest(5)).toBe(7848606);
    });
    test('PerftTest(5) to be 8153719', () => {
        ParseFen("1r2k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1");
        expect(PerftTest(5)).toBe(8153719);
    });
    test('PerftTest(5) to be 7736373', () => {
        ParseFen("2r1k2r/8/8/8/8/8/8/R3K2R b KQk - 0 1");
        expect(PerftTest(5)).toBe(7736373);
    });
    test('PerftTest(5) to be 7878456', () => {
        ParseFen("r3k1r1/8/8/8/8/8/8/R3K2R b KQq - 0 1");
        expect(PerftTest(5)).toBe(7878456);
    });
    test('PerftTest(5) to be 570726', () => {
        ParseFen("8/1n4N1/2k5/8/8/5K2/1N4n1/8 w - - 0 1");
        expect(PerftTest(5)).toBe(570726);
    });
    test('PerftTest(5) to be 223507', () => {
        ParseFen("8/1k6/8/5N2/8/4n3/8/2K5 w - - 0 1");
        expect(PerftTest(5)).toBe(223507);
    });
    test('PerftTest(5) to be 1198299', () => {
        ParseFen("8/8/4k3/3Nn3/3nN3/4K3/8/8 w - - 0 1");
        expect(PerftTest(5)).toBe(1198299);
    });
    test('PerftTest(5) to be 38348', () => {
        ParseFen("K7/8/2n5/1n6/8/8/8/k6N w - - 0 1");
        expect(PerftTest(5)).toBe(38348);
    });
    test('PerftTest(5) to be 92250', () => {
        ParseFen("k7/8/2N5/1N6/8/8/8/K6n w - - 0 1");
        expect(PerftTest(5)).toBe(92250);
    });
    test('PerftTest(5) to be 582642', () => {
        ParseFen("8/1n4N1/2k5/8/8/5K2/1N4n1/8 b - - 0 1");
        expect(PerftTest(5)).toBe(582642);
    });
    test('PerftTest(5) to be 288141', () => {
        ParseFen("8/1k6/8/5N2/8/4n3/8/2K5 b - - 0 1");
        expect(PerftTest(5)).toBe(288141);
    });
    test('PerftTest(5) to be 281190', () => {
        ParseFen("8/8/3K4/3Nn3/3nN3/4k3/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(281190);
    });
    test('PerftTest(5) to be 92250', () => {
        ParseFen("K7/8/2n5/1n6/8/8/8/k6N b - - 0 1");
        expect(PerftTest(5)).toBe(92250);
    });
    test('PerftTest(5) to be 38348', () => {
        ParseFen("k7/8/2N5/1N6/8/8/8/K6n b - - 0 1");
        expect(PerftTest(5)).toBe(38348);
    });
    test('PerftTest(5) to be 1320507', () => {
        ParseFen("B6b/8/8/8/2K5/4k3/8/b6B w - - 0 1");
        expect(PerftTest(5)).toBe(1320507);
    });
    test('PerftTest(5) to be 1713368', () => {
        ParseFen("8/8/1B6/7b/7k/8/2B1b3/7K w - - 0 1");
        expect(PerftTest(5)).toBe(1713368);
    });
    test('PerftTest(5) to be 787524', () => {
        ParseFen("k7/B7/1B6/1B6/8/8/8/K6b w - - 0 1");
        expect(PerftTest(5)).toBe(787524);
    });
    test('PerftTest(5) to be 310862', () => {
        ParseFen("K7/b7/1b6/1b6/8/8/8/k6B w - - 0 1");
        expect(PerftTest(5)).toBe(310862);
    });
    test('PerftTest(5) to be 530585', () => {
        ParseFen("B6b/8/8/8/2K5/5k2/8/b6B b - - 0 1");
        expect(PerftTest(5)).toBe(530585);
    });
    test('PerftTest(5) to be 1591064', () => {
        ParseFen("8/8/1B6/7b/7k/8/2B1b3/7K b - - 0 1");
        expect(PerftTest(5)).toBe(1591064);
    });
    test('PerftTest(5) to be 310862', () => {
        ParseFen("k7/B7/1B6/1B6/8/8/8/K6b b - - 0 1");
        expect(PerftTest(5)).toBe(310862);
    });
    test('PerftTest(5) to be 787524', () => {
        ParseFen("K7/b7/1b6/1b6/8/8/8/k6B b - - 0 1");
        expect(PerftTest(5)).toBe(787524);
    });
    test('PerftTest(5) to be 2161211', () => {
        ParseFen("7k/RR6/8/8/8/8/rr6/7K w - - 0 1");
        expect(PerftTest(5)).toBe(2161211);
    });
    test('PerftTest(5) to be 20506480', () => {
        ParseFen("R6r/8/8/2K5/5k2/8/8/r6R w - - 0 1");
        expect(PerftTest(5)).toBe(20506480);
    });
    test('PerftTest(5) to be 2161211', () => {
        ParseFen("7k/RR6/8/8/8/8/rr6/7K b - - 0 1");
        expect(PerftTest(5)).toBe(2161211);
    });
    test('PerftTest(5) to be 20521342', () => {
        ParseFen("R6r/8/8/2K5/5k2/8/8/r6R b - - 0 1");
        expect(PerftTest(5)).toBe(20521342);
    });
    test('PerftTest(5) to be 14893', () => {
        ParseFen("6kq/8/8/8/8/8/8/7K w - - 0 1");
        expect(PerftTest(5)).toBe(14893);
    });
    test('PerftTest(5) to be 14893', () => {
        ParseFen("6KQ/8/8/8/8/8/8/7k b - - 0 1");
        expect(PerftTest(5)).toBe(14893);
    });
    test('PerftTest(5) to be 166741', () => {
        ParseFen("K7/8/8/3Q4/4q3/8/8/7k w - - 0 1");
        expect(PerftTest(5)).toBe(166741);
    });
    test('PerftTest(5) to be 105749', () => {
        ParseFen("6qk/8/8/8/8/8/8/7K b - - 0 1");
        expect(PerftTest(5)).toBe(105749);
    });
    test('PerftTest(5) to be 14893', () => {
        ParseFen("6KQ/8/8/8/8/8/8/7k b - - 0 1");
        expect(PerftTest(5)).toBe(14893);
    });
    test('PerftTest(5) to be 166741', () => {
        ParseFen("K7/8/8/3Q4/4q3/8/8/7k b - - 0 1");
        expect(PerftTest(5)).toBe(166741);
    });
    test('PerftTest(5) to be 1347', () => {
        ParseFen("8/8/8/8/8/K7/P7/k7 w - - 0 1");
        expect(PerftTest(5)).toBe(1347);
    });
    test('PerftTest(5) to be 1347', () => {
        ParseFen("8/8/8/8/8/7K/7P/7k w - - 0 1");
        expect(PerftTest(5)).toBe(1347);
    });
    test('PerftTest(5) to be 342', () => {
        ParseFen("K7/p7/k7/8/8/8/8/8 w - - 0 1");
        expect(PerftTest(5)).toBe(342);
    });
    test('PerftTest(5) to be 342', () => {
        ParseFen("7K/7p/7k/8/8/8/8/8 w - - 0 1");
        expect(PerftTest(5)).toBe(342);
    });
    test('PerftTest(5) to be 7028', () => {
        ParseFen("8/2k1p3/3pP3/3P2K1/8/8/8/8 w - - 0 1");
        expect(PerftTest(5)).toBe(7028);
    });
    test('PerftTest(5) to be 342', () => {
        ParseFen("8/8/8/8/8/K7/P7/k7 b - - 0 1");
        expect(PerftTest(5)).toBe(342);
    });
    test('PerftTest(5) to be 342', () => {
        ParseFen("8/8/8/8/8/7K/7P/7k b - - 0 1");
        expect(PerftTest(5)).toBe(342);
    });
    test('PerftTest(5) to be 1347', () => {
        ParseFen("K7/p7/k7/8/8/8/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(1347);
    });
    test('PerftTest(5) to be 1347', () => {
        ParseFen("7K/7p/7k/8/8/8/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(1347);
    });
    test('PerftTest(5) to be 5408', () => {
        ParseFen("8/2k1p3/3pP3/3P2K1/8/8/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(5408);
    });
    test('PerftTest(5) to be 1814', () => {
        ParseFen("8/8/8/8/8/4k3/4P3/4K3 w - - 0 1");
        expect(PerftTest(5)).toBe(1814);
    });
    test('PerftTest(5) to be 1814', () => {
        ParseFen("4k3/4p3/4K3/8/8/8/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(1814);
    });
    test('PerftTest(5) to be 1969', () => {
        ParseFen("8/8/7k/7p/7P/7K/8/8 w - - 0 1");
        expect(PerftTest(5)).toBe(1969);
    });
    test('PerftTest(5) to be 1969', () => {
        ParseFen("8/8/k7/p7/P7/K7/8/8 w - - 0 1");
        expect(PerftTest(5)).toBe(1969);
    });
    test('PerftTest(5) to be 8296', () => {
        ParseFen("8/8/3k4/3p4/3P4/3K4/8/8 w - - 0 1");
        expect(PerftTest(5)).toBe(8296);
    });
    test('PerftTest(5) to be 23599', () => {
        ParseFen("8/3k4/3p4/8/3P4/3K4/8/8 w - - 0 1");
        expect(PerftTest(5)).toBe(23599);
    });
    test('PerftTest(5) to be 21637', () => {
        ParseFen("8/8/3k4/3p4/8/3P4/3K4/8 w - - 0 1");
        expect(PerftTest(5)).toBe(21637);
    });
    test('PerftTest(5) to be 3450', () => {
        ParseFen("k7/8/3p4/8/3P4/8/8/7K w - - 0 1");
        expect(PerftTest(5)).toBe(3450);
    });
    test('PerftTest(5) to be 1969', () => {
        ParseFen("8/8/7k/7p/7P/7K/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(1969);
    });
    test('PerftTest(5) to be 1969', () => {
        ParseFen("8/8/k7/p7/P7/K7/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(1969);
    });
    test('PerftTest(5) to be 8296', () => {
        ParseFen("8/8/3k4/3p4/3P4/3K4/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(8296);
    });
    test('PerftTest(5) to be 21637', () => {
        ParseFen("8/3k4/3p4/8/3P4/3K4/8/8 b - - 0 1");
        expect(PerftTest(5)).toBe(21637);
    });
    test('PerftTest(5) to be 23599', () => {
        ParseFen("8/8/3k4/3p4/8/3P4/3K4/8 b - - 0 1");
        expect(PerftTest(5)).toBe(23599);
    });
    test('PerftTest(5) to be 3309', () => {
        ParseFen("k7/8/3p4/8/3P4/8/8/7K b - - 0 1");
        expect(PerftTest(5)).toBe(3309);
    });
    test('PerftTest(5) to be 4661', () => {
        ParseFen("7k/3p4/8/8/3P4/8/8/K7 w - - 0 1");
        expect(PerftTest(5)).toBe(4661);
    });
    test('PerftTest(5) to be 4786', () => {
        ParseFen("7k/8/8/3p4/8/8/3P4/K7 w - - 0 1");
        expect(PerftTest(5)).toBe(4786);
    });
    test('PerftTest(5) to be 6112', () => {
        ParseFen("k7/8/8/7p/6P1/8/8/K7 w - - 0 1");
        expect(PerftTest(5)).toBe(6112);
    });
    test('PerftTest(5) to be 4354', () => {
        ParseFen("k7/8/7p/8/8/6P1/8/K7 w - - 0 1");
        expect(PerftTest(5)).toBe(4354);
    });
    test('PerftTest(5) to be 6112', () => {
        ParseFen("k7/8/8/6p1/7P/8/8/K7 w - - 0 1");
        expect(PerftTest(5)).toBe(6112);
    });
    test('PerftTest(5) to be 4354', () => {
        ParseFen("k7/8/6p1/8/8/7P/8/K7 w - - 0 1");
        expect(PerftTest(5)).toBe(4354);
    });
    test('PerftTest(5) to be 3013', () => {
        ParseFen("k7/8/8/3p4/4p3/8/8/7K w - - 0 1");
        expect(PerftTest(5)).toBe(3013);
    });
    test('PerftTest(5) to be 4271', () => {
        ParseFen("k7/8/3p4/8/8/4P3/8/7K w - - 0 1");
        expect(PerftTest(5)).toBe(4271);
    });
    test('PerftTest(5) to be 5014', () => {
        ParseFen("7k/3p4/8/8/3P4/8/8/K7 b - - 0 1");
        expect(PerftTest(5)).toBe(5014);
    });
    test('PerftTest(5) to be 4658', () => {
        ParseFen("7k/8/8/3p4/8/8/3P4/K7 b - - 0 1");
        expect(PerftTest(5)).toBe(4658);
    });
    test('PerftTest(5) to be 6112', () => {
        ParseFen("k7/8/8/7p/6P1/8/8/K7 b - - 0 1");
        expect(PerftTest(5)).toBe(6112);
    });
    test('PerftTest(5) to be 4354', () => {
        ParseFen("k7/8/7p/8/8/6P1/8/K7 b - - 0 1");
        expect(PerftTest(5)).toBe(4354);
    });
    test('PerftTest(5) to be 6112', () => {
        ParseFen("k7/8/8/6p1/7P/8/8/K7 b - - 0 1");
        expect(PerftTest(5)).toBe(6112);
    });
    test('PerftTest(5) to be 4354', () => {
        ParseFen("k7/8/6p1/8/8/7P/8/K7 b - - 0 1");
        expect(PerftTest(5)).toBe(4354);
    });
    test('PerftTest(5) to be 4337', () => {
        ParseFen("k7/8/8/3p4/4p3/8/8/7K b - - 0 1");
        expect(PerftTest(5)).toBe(4337);
    });
    test('PerftTest(5) to be 4271', () => {
        ParseFen("k7/8/3p4/8/8/4P3/8/7K b - - 0 1");
        expect(PerftTest(5)).toBe(4271);
    });
    test('PerftTest(5) to be 6112', () => {
        ParseFen("7k/8/8/p7/1P6/8/8/7K w - - 0 1");
        expect(PerftTest(5)).toBe(6112);
    });
    test('PerftTest(5) to be 4354', () => {
        ParseFen("7k/8/p7/8/8/1P6/8/7K w - - 0 1");
        expect(PerftTest(5)).toBe(4354);
    });
    test('PerftTest(5) to be 6112', () => {
        ParseFen("7k/8/8/1p6/P7/8/8/7K w - - 0 1");
        expect(PerftTest(5)).toBe(6112);
    });
    test('PerftTest(5) to be 4354', () => {
        ParseFen("7k/8/1p6/8/8/P7/8/7K w - - 0 1");
        expect(PerftTest(5)).toBe(4354);
    });
    test('PerftTest(5) to be 7574', () => {
        ParseFen("k7/7p/8/8/8/8/6P1/K7 w - - 0 1");
        expect(PerftTest(5)).toBe(7574);
    });
    test('PerftTest(5) to be 7574', () => {
        ParseFen("k7/6p1/8/8/8/8/7P/K7 w - - 0 1");
        expect(PerftTest(5)).toBe(7574);
    });
    test('PerftTest(5) to be 24122', () => {
        ParseFen("3k4/3pp3/8/8/8/8/3PP3/3K4 w - - 0 1");
        expect(PerftTest(5)).toBe(24122);
    });
    test('PerftTest(5) to be 6112', () => {
        ParseFen("7k/8/8/p7/1P6/8/8/7K b - - 0 1");
        expect(PerftTest(5)).toBe(6112);
    });
    test('PerftTest(5) to be 4354', () => {
        ParseFen("7k/8/p7/8/8/1P6/8/7K b - - 0 1");
        expect(PerftTest(5)).toBe(4354);
    });
    test('PerftTest(5) to be 6112', () => {
        ParseFen("7k/8/8/1p6/P7/8/8/7K b - - 0 1");
        expect(PerftTest(5)).toBe(6112);
    });
    test('PerftTest(5) to be 4354', () => {
        ParseFen("7k/8/1p6/8/8/P7/8/7K b - - 0 1");
        expect(PerftTest(5)).toBe(4354);
    });
    test('PerftTest(5) to be 7574', () => {
        ParseFen("k7/7p/8/8/8/8/6P1/K7 b - - 0 1");
        expect(PerftTest(5)).toBe(7574);
    });
    test('PerftTest(5) to be 7574', () => {
        ParseFen("k7/6p1/8/8/8/8/7P/K7 b - - 0 1");
        expect(PerftTest(5)).toBe(7574);
    });
    test('PerftTest(5) to be 24122', () => {
        ParseFen("3k4/3pp3/8/8/8/8/3PP3/3K4 b - - 0 1");
        expect(PerftTest(5)).toBe(24122);
    });
    test('PerftTest(5) to be 90606', () => {
        ParseFen("8/Pk6/8/8/8/8/6Kp/8 w - - 0 1");
        expect(PerftTest(5)).toBe(90606);
    });
    test('PerftTest(5) to be 2193768', () => {
        ParseFen("n1n5/1Pk5/8/8/8/8/5Kp1/5N1N w - - 0 1");
        expect(PerftTest(5)).toBe(2193768);
    });
    test('PerftTest(5) to be 1533145', () => {
        ParseFen("8/PPPk4/8/8/8/8/4Kppp/8 w - - 0 1");
        expect(PerftTest(5)).toBe(1533145);
    });
    test('PerftTest(5) to be 3605103', () => {
        ParseFen("n1n5/PPPk4/8/8/8/8/4Kppp/5N1N w - - 0 1");
        expect(PerftTest(5)).toBe(3605103);
    });
    test('PerftTest(5) to be 90606', () => {
        ParseFen("8/Pk6/8/8/8/8/6Kp/8 b - - 0 1");
        expect(PerftTest(5)).toBe(90606);
    });
    test('PerftTest(5) to be 2193768', () => {
        ParseFen("n1n5/1Pk5/8/8/8/8/5Kp1/5N1N b - - 0 1");
        expect(PerftTest(5)).toBe(2193768);
    });
    test('PerftTest(5) to be 1533145', () => {
        ParseFen("8/PPPk4/8/8/8/8/4Kppp/8 b - - 0 1");
        expect(PerftTest(5)).toBe(1533145);
    });
    test('PerftTest(5) to be 3605103', () => {
        ParseFen("n1n5/PPPk4/8/8/8/8/4Kppp/5N1N b - - 0 1");
        expect(PerftTest(5)).toBe(3605103);
    });
});