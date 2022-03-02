const Calculator = require('./../calculator');


describe('Calculate two give nums', () => {
    describe('Adding numbers', () => {
        test('Add 12+3 = 15', () => {
            const calc = new Calculator(12,3);
            expect(calc.add()).toBe(15)
        });

        test('Add 15+5 = 20', () => {
            const calc = new Calculator(15,5);
            expect(calc.add()).toBe(20)
        });

        test('Add 20+5 = 25', () => {
            const calc = new Calculator(20,5);
            expect(calc.add()).toBe(25)
        });

    });

    
    describe('Substract numbers', () => {
        test('Subtract 12-3 = 9', () => {
            const calc = new Calculator(12,3);
            expect(calc.subtract()).toBe(9)
        });

        test('Subtract 15-5 = 10', () => {
            const calc = new Calculator(15,5);
            expect(calc.subtract()).toBe(10)
        });

        test('Subtract 20-5 = 15', () => {
            const calc = new Calculator(20,5);
            expect(calc.subtract()).toBe(15)
        });

    });
})