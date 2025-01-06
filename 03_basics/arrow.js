// const user={
//     username:"siddharth",
//     price: 999,
//     welcomeMessage: function(){
//        // console.log(`${this.username},welcome to this website`);
//         // 'this' will refer to the object and search for its attributes which are being invoked as in this case username.
//         // this talks about current context or current variables
//        // console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username="sam" //context changed
// user.welcomeMessage()

// function showthis(){
//     username:"siddharth"
//    // console.log(`${this.username}`)
// }
// showthis() //*****this will give undefined as this will refer to an object and in this case refer to as global object which is undefined */

// // function chai(){
// //     console.log(this)
// // }
// // chai()

const chai= function() {
  let  username= "hitesh" //if we dont use let in this then the username will be assigened to global object and hence the output will be printed.. this will refer to the global object and see there if any attribute like username is defined and in that case when we didnt use "let" it will give output...
   console.log(this.username)
}
chai()

const chai1 =()=>{ //arrow object
     username ="hitesh"
    console.log(this.username) //here arrow functions differ from regular functions.. The reason (this.username) is undefined is that, even though username is a global variable, arrow functions do not automatically add properties to this. Regular functions, on the other hand, can attach properties to this.
    console.log(this)
}
chai1()

const addtwo=(num1 ,num2)=> (num1+num2) //implicit  return.. of arrow function no need of writing "return" keyword
console.log(addtwo(3,4))