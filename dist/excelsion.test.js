"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excelsion_1 = require("./excelsion");
test('Instantiate Excelsion', () => {
    expect(() => { throw new excelsion_1.Excelsion(); }).toThrow();
});
test('Instantiate Excelsion again', () => {
    expect(new excelsion_1.Excelsion());
});
test('Instantiate Excelsion again', () => {
    expect(new excelsion_1.Excelsion()).toEqual(new excelsion_1.Excelsion());
});
test('Instantiate Excelsion two times', () => {
    expect(new excelsion_1.Excelsion()).not.toBe(new excelsion_1.Excelsion());
});
test('Throw base excelsion', () => {
    const func = () => {
        throw new excelsion_1.Excelsion();
    };
    expect(func).toThrow();
    expect(func).toThrowError(new excelsion_1.Excelsion());
});
