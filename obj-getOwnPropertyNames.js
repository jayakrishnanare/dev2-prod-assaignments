//getOwnPropertyNames -> it returns the array with keys names

const numbers = {
    a : 1,
    b : 2,
    c : 3
};

console.log(Object.getOwnPropertyNames(numbers))

let obj = {
    a:1,
    b:2
}
Object.defineProperty(obj,"c",{
    value : 3,
    enumerable : false
});

console.log(Object.getOwnPropertyNames(obj));


const obj2 = {
    x:20
};
Object.defineProperty(obj2,"y",{
    value : 2,
    configurable : true
});

const propertynames = Object.getOwnPropertyNames(obj2);
console.log(propertynames)