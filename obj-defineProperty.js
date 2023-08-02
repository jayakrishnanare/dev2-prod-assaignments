const obj = {};

Object.defineProperty(obj , "property1",{
    value : 40,
    writable : true
});

console.log(obj.property1);


const obj1 = {};

Object.defineProperty(obj1,'property2',{
    value : "goodmornng",
    writable : true
});

obj1.property2 = "good aternoon";
console.log(obj1.property2)


//

const obj2 = {};

Object.defineProperty(obj2,'property',{
    value: "bhargav thakkelapati",
    writable:true
});

console.log(obj2.property)