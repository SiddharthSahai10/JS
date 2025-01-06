const tinderuser= new Object() //singleton object
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin= false
//console.log(tinderuser)
const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
//const obj3=  Object.assign({},obj1,obj2) //concatenates objects
const obj3={...obj1,...obj2} // best by spreading
console.log(obj3);
console.log(tinderuser)
console.log(Object.keys(tinderuser))//returns keys in a array form very important
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'))

