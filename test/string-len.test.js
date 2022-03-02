const stringLen = require('./../string-length');

test('String length of word bush is 4', () => {
    expect(stringLen('bush')).toBe(4);
});