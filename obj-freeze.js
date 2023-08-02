//freeze -> simply lock the object then we cant do operations on tha freezed object

const obj =  {
    name : "jay",
    age : 22
}

const data = Object.freeze(obj);
console.log(data)

// let ddlete = delete obj.name ;
// console.log(ddlete);
// console.log(obj)
// let update = obj.name = "thirupathi";
// console.log(update);
// console.log(obj)

//02

const config = {
    apiUrl : "https://api.example.com",
    timeout: 5000
};
console.log(Object.freeze(config));


config.timeout = 6000;
console.log(config);

//03

const colors = Object.freeze({
    RED : "red",
    PINK : "pink",
    YELLOW : "yellow"
});
colors.RED = "darkred";
console.log(colors)

//04

function caluclte (x,y){
    return x+y
};
Object.freeze(caluclte)
console.log(caluclte(10,20))
