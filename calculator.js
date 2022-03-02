class Calculator {
    constructor(firstNum,secondNum) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    }

    add = () => {
        return this.firstNum + this.secondNum;
    }

    subtract = () => {
        return this.firstNum - this.secondNum;
    }

    multiply = () => {
        return this.firstNum * this.secondNum;
    }

    divide = () => {
        return this.firstNum / this.secondNum;
    }
}

const calc = new Calculator(12,3);
console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
console.log(calc.divide());

module.exports = Calculator;