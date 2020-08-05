//Paragraph 4.6

//Q1

let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A;
let b = new B;

alert(a == b); //true

//Q2

function Calculator() {
    this.read = function() {
        this.a = +prompt("First value");
        this.b = +prompt("Second value");
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
alert("Sum = " + calculator.sum());
alert("Multiplication = " + calculator.mul());

//Q3

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt("Add to value: ")
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
