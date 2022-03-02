const capitalise = require('./../capitalise');

describe('Capitalise a string', () => {
    test('Capitalising bushra is Bushra', () => {
        expect(capitalise('bushra')).toBe('Bushra');
    });

    test('234 should return an Error', () => {
        expect(() => capitalise(234)).toThrow(new Error('Not string given'));
    });

    test(' string begins with space should fail', () => {
        expect( () => { capitalise(' name')}).toThrow(Error('Unwanted beginning space detected'));
    });
});