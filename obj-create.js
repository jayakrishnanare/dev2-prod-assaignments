const prototype = {
  greetMessage: function () {
    console.log(`my name is ${this.name} and ${this.age}`);
  },
};

const createObject = Object.create(prototype);
createObject.name = "jayakrishna";
createObject.age = 22;


//ex-02

const carPrototype = {
    start : function(){
        console.log(`car is started`)
    }
}

const myCar = Object.create(carPrototype,{
    engine : {
        value: "Toyota",
    //     writable: true,
    //    enumerable: true
    },
    outlook : {
        value : "silver"
    }
});
// console.log(myCar.engine);
// console.log(myCar.outlook)
// myCar.start();


//ex-03

const animal = {
    makesound : function(){
        console.log(`${this.sound}`)
    }
};

let cat = Object.create(animal);
cat.sound = "meow"
// cat.makesound()

let dog = Object.create(animal);
dog.sound = "bow";
// dog.makesound()



//ex-04
const person = {
    fullname : function(){
        return `${this.firstname} ${this.lastname}`
    }
}
const personName = Object.create(person, {
    firstname : {
        value : "jayakrishna"
    },
    lastname : {
        value : "nare"
    }
});
// let data = personName.fullname();
// console.log(data);
// console.log(personName.firstname);
// console.log(personName.lastname)

//ex-05

const student = {
    studentName : function(){
        console.log(`hi my name i ${this.name}`)
    }
};

let stuentDetails = Object.create(student);
stuentDetails.name = "thirupathi swamy";
stuentDetails.studentName();

let stuentDetails2 = Object.create(student)
stuentDetails2.name = "rajesh thalluri";
stuentDetails2.studentName();
