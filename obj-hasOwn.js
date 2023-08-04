const obj = {name : 'jayakrihsna'}
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('age'))

//

let obj1 = {
    name : 'bhargav',
    age : 23
}
if(obj1.hasOwnProperty('tostring')){
    console.log('this will be excuted')
}