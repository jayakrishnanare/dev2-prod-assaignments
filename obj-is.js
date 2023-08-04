//checking the two values is same or not
//Comparing Numbers:
console.log(Object.is(5,5));
console.log(Object.is(10,1));
console.log(Object.is(3,'3'))

//Comparing Strings:

console.log(Object.is('hello','hello'));
console.log(Object.is('Hello','hello'))

console.log(Object.is(null, null));        // Output: true
console.log(Object.is(undefined, null));

//comparing arrays
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log(Object.is(arr1, arr2)); // Output: false
console.log(Object.is(arr1, arr3)); // Output: true

//comparing objects

const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

console.log(Object.is(obj1, obj2)); // Output: false
console.log(Object.is(obj1, obj3)); // Output: true

