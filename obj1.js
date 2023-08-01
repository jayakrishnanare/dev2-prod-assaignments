let obj = {};

obj.name = "jayakrishna";
obj.age = 22;
obj.location = "hyderabad"


//checking th objet has keys or not

let result = obj.hasOwnProperty("name");
// console.log(result);
let data = obj.valueOf();
// console.log(data)


const newObject = new Object();
newObject.name = "jayakrishna";
newObject.age = 22;
// console.log(newObject.valueOf())

const object = new Object(1);
// console.log(typeof object)

//constructor property

let o1 = {};
let output = o1.constructor  === Object;
// console.log(output)

let o2 = new Object();
output = o2.constructor === Object;
// console.log(output)



