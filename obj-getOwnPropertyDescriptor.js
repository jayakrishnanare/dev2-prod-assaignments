//getOwnPropertyDescriptor ->  allows you to get the property descriptor of a specific property on an object.


//01.
const person = { name: "jay"};
const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);

//02.
const circle = {
    radius : 5,
   get daimeter(){
    return this.radius * 2
    }
}
let result = Object.getOwnPropertyDescriptor(circle , "daimeter");
console.log(result)