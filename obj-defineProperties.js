//defineProperties  -> is an inbuilt  function to define multiple properties on an object at once 

const obj = {};


Object.defineProperties(obj, {
    name : {
        value : "bhargav thakkelapati",
        writable : true
    },
    age : {
        value : 22,
        writable : true
    }
});
console.log(obj.name);
console.log(obj.age);

const obj1 = {};

Object.defineProperties(obj1,{
    name : {
        value : "jayakrishna",
        writable : true
    },
    age : {
        value : 22,
        writable : false
    }
});

obj1.name = "thirupathi swamy";
obj1.age = 33;

console.log(obj1.age)


//

const object = {};

Object.defineProperties(object,{
    property1 : {
        value : 100,
        writable : true
    },
    property2: {}
});

console.log(object.property1)