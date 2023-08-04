//isFrozen -> this method is uses to check weather the object is freeze or not

//
let obj = {
    name : "jay",
    age : 22
};
Object.freeze(obj);
console.log(obj);

let results = Object.isFrozen(obj);
console.log(results) // true

//
let person = {
    name : 'rajeshthalluri',
    age : 24
};

Object.preventExtensions(person);
console.log(Object.isFrozen(person)) // false

//
let obj1 = {
    prop1 : "check",
    prop2 : "check2"
};

Object.seal(obj1);
console.log(Object.isFrozen(obj1));

//
 obj = { a: 1, b: 2 };

Object.seal(obj);

console.log(Object.isFrozen(obj))