//object.keys -> it returns the values from the object


const obj = {
    name : "jayakrishnaa",
    age : 22,
    company : 'culinda'
};
console.log(Object.keys(obj))


//

let arr = [1,2,3,4]
let keys = Object.keys(arr);
console.log(keys);

//


let obj1 = {};

Object.defineProperty(obj,"prop",{
    value : "hi good morning",
    enumerable : true
});
console.log(Object.keys(obj1));


//
console.log(Object.keys('jayakrishna'));
console.log(Object.keys([11,2,3,4,5]))