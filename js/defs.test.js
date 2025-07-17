import { Definitions } from "./defs.js"
let defs = new Definitions();
describe("PIECE", () => {
    test('PIECES.wP should result in 1', () => {
        expect(defs.PIECES.wP).toBe(1);
    });
    test('PIECES.wN should result in 2', () => {
        expect(defs.PIECES.wN).toBe(2);
    });
    test('PIECES.wB should result in 3', () => {
        expect(defs.PIECES.wB).toBe(3);
    });
    test('PIECES.wR should result in 4', () => {
        expect(defs.PIECES.wR).toBe(4);
    });
    test('PIECES.wQ should result in 5', () => {
        expect(defs.PIECES.wQ).toBe(5);
    });
    test('PIECES.wK should result in 6', () => {
        expect(defs.PIECES.wK).toBe(6);
    });
    test('PIECES.bP should result in 7', () => {
        expect(defs.PIECES.bP).toBe(7);
    });
    test('PIECES.bN should result in 8', () => {
        expect(defs.PIECES.bN).toBe(8);
    });
    test('PIECES.bB should result in 9', () => {
        expect(defs.PIECES.bB).toBe(9);
    });
    test('PIECES.bR should result in 10', () => {
        expect(defs.PIECES.bR).toBe(10);
    });
    test('PIECES.bQ should result in 11', () => {
        expect(defs.PIECES.bQ).toBe(11);
    });
    test('PIECES.bK should result in 12', () => {
        expect(defs.PIECES.bK).toBe(12);
    });
});