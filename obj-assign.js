//assaign -> assign is used to merge the objects and overwrites the returned values


//Assign objcets
const target = {}
const source1 = {a:1,b:2,c:3};
const source2 = {c:8,d:4,e:5};

Object.assign(target,source1,source2);
// console.log(target)

let obj = {}
const a = {marks1:23,marks2:25,marks3:33};
const b = {marks3:35,marks4:54,marks5:88};

Object.assign(obj,a,b);
// console.log(obj)


const obj1 = {a:0,b:{c:0}};
Object.assign({}, obj1);
console.log(obj1);

obj1.a = 2;
// console.log(obj1)


//merging objects

const x = {a:10,b:20};
const y = {c:30,d:40};
const z = {e:50,f:60};
// console.log(Object.assign(x,y,z));
// console.log(x);

let x1 = {a:1,b:1,c:1};
let y1 = {b:2,c:2};
let z1 = {c:3};
let obj2 = Object.assign({},x1,y1,z1);
// console.log(obj2)


//example-04
const v1 = "abc";
const v2 = true;
const v3 = 10;
const objv = Object.assign({}, v1, null, v2, undefined, v3);
console.log(objv)