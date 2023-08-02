
//converting array o arrays into an object

const entries = [["a",10],["b",20],["c",30]];
let result = Object.fromEntries (entries);
// console.log(result)

//02.Converting Map to an Object:

const map = new Map([["x",1],["y",2]]);
const obj = Object.fromEntries(map);
// console.log(obj)

//03.Converting Map to an Object:

const searchParams = new URLSearchParams('name=jay&age=22');
const object = Object.fromEntries(searchParams);
// console.log(object)

//04.Creating Object from Filtered Entries:

const data = { a: 1, b: 2, c: 3, d: 4 };
const filteredData = Object.entries(data).filter(([key,value]) => value % 2 === 0);
result = Object.fromEntries(filteredData);
console.log(result)

//05.clone the object

const original = { x: 10, y: 20 };
const clone = Object.fromEntries(Object.entries(original));
console.log(clone);

//06.

const key = "name";
const value = "jay";
result =    Object.fromEntries([[key,value]]);
console.log(result);

//07.

const emptyArray = [];

result = Object.fromEntries(emptyArray);
console.log(result)