
//Assign objcets
const target = {}
const source1 = {a:1,b:2,c:3};
const source2 = {c:8,d:4,e:5};

Object.assign(target,source1,source2);
console.log(target)

let obj = {}
const a = {marks1:23,marks2:25,marks3:33};
const b = {marks3:35,marks4:54,marks5:88};

Object.assign(obj,a,b);
console.log(obj)
