//object loterals
const mysym= Symbol("key1")
const jsuser={
    name: "siddharth sahai",
    [mysym]:"mykeys1", // always declare it within []. agar [] nhi lete toh as a string treat hoga
    age: 19,
    email: "shattering10@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "tuesday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"])//better approach always remember the keys are taken as strings here so apply double inverted commas
// console.log(jsuser["age"])
// console.log( jsuser[mysym])//default way to deal wuth symbols cant be operated by dot operator from an object
// console.log(jsuser)
// Object.freeze(jsuser)//after this any changes in object will not be inflected
jsuser.greeting= function(){
    console.group("hello js user")
}
jsuser.greetingtwo= function(){
    console.group(`hello js user,${this.name}`)//pointing to the name in this current object..
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
//***************************************NOTE ABOUT THE SYMBOLS AND THEIR SYNTAX************************************* */