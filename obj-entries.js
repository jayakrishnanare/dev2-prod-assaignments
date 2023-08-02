// object.entries -> The method returns an array where each element is an array consisting of a key-value pair from the original object.

const obj = {
  name: "jay",
  age: 22,
};

// console.log(Object.entries(obj));


const obj1 = {
    name:"bhargav",
    age : 24,
    location : "huyderabad",
    company :"dev2prod"
};

for(let [key,value] of Object.entries(obj1)){
    // console.log(`${key} : ${value}`)
};

//
// console.log(Object.entries('jayakrishna'));
// console.log(Object.entries("bhargav thakkelapati"));
// console.log(Object.entries('abc'))

//
const anObj = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.entries(anObj))


//
const object = {a:10,b:20,c:30};

for(let [key,value] of Object.entries(object)){
    console.log(`${key}:${value}`)
}
//

Object.entries(object).forEach(([key,value]) => {
    console.log(`${key}:${value}`)
})