let num = 24;
let bigInt = 24n;
let string = "Hello";
let bool = true;
let nil = null;
let notAssigned;
let object = {};
let symbol = Symbol("symb");
let someFunction = function() {};

alert(`num is ${typeof num}\n
bigInt is ${typeof bigInt}\n
string is ${typeof string}\n
bool is ${typeof bool}\n
nil is ${typeof nil}\n
notAssigned is ${typeof notAssigned}\n
object is ${typeof object}\n
symbol is ${typeof symbol}\n
someFunction is ${typeof someFunction}\n`
);
