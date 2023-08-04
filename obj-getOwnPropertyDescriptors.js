const obj = {
    x : 1,
    y : 2
}
let result = Object.getOwnPropertyDescriptors(obj);
console.log(result);

const details = {
    name : "jayakrihsna",
    age : 23
}

result = Object.getOwnPropertyDescriptors(details);
console.log(result)