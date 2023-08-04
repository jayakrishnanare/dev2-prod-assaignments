//getPrototypeOf -> method returns the prototype an empty objcet

let person = {name : "jay"}; 
const prototype = Object.getPrototypeOf(person)
console.log(prototype)


//02

function car(make){
    this.make = make
}

const mycar = new car('toyoto');
let result = Object.getPrototypeOf(mycar);
console.log(result)

//03

const arr = [1,2,3];
result = Object.getPrototypeOf(arr);
console.log(result)

//04
const myObj = Object.create({x:10});
result = Object.getPrototypeOf(myObj);
console.log(result);

