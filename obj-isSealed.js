
// object.isSealed() -> 


const obj = {};

console.log(Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj))

//

const obj1 = {name: "jay", age:23};
Object.preventExtensions(obj1);

console.log(Object.isExtensible(obj1));


//
const obj2 = {
    x : 1,
    y : 2
};
Object.seal(obj2);

console.log(obj2);
console.log(Object.isExtensible(obj2))


//
const nestobj = {
    x : 1,
    y : 2
};
const obj3 = {
    prop : 'value',
    nested : nestobj
};

Object.seal(obj3);
console.log(Object.isExtensible(obj3));
console.log(Object.isSealed(obj3))