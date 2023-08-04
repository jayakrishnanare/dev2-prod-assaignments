//Object.getOwnPropertySymbols() -> is a built-in method in JavaScript that allows you to get an array of all own symbol properties of an object

const obj = {};
const a = Symbol("a");
const b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

const getSymbols = Object.getOwnPropertySymbols(obj);
// console.log(getSymbols);

const obj1 = {}

const symbol1 = Symbol('symbol1');
const symbol2 = Symbol('symbol2');


Object.defineProperty(obj1,symbol1,{
    value:"symbol1",
    enumerable : false

})

Object.defineProperty(obj1,symbol2,{
    value : "symbol2",
    enumerable : true
})


const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols)