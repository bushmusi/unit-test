const sum = require('./sum');
const stringLen = require('./string-length');
const revrseStr = require('./reverse-string');

test('Sum 1+2 = 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('String length of word bush is 4', () => {
    expect(stringLen('bush')).toBe(4);
});

test('Revrse string of bush is hsub', () => {
    expect(revrseStr('bush')).toBe('hsub');
});