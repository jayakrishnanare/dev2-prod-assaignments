//isExtensible ->this  method determines if an object is extensible (whether it can have new properties added to it)

let obj =  {};
console.log(Object.isExtensible(obj));

//
obj = {
    name : "jayakrishna",
    age : 22
};
console.log(Object.isExtensible(obj))

//

obj = {
    a : 1,
    b : 2
};
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj))