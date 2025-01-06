//stack(primitive)     heap(non primitive)
let MyYoutubeName="siddharth"
let anothername = MyYoutubeName
anothername= "chai aur code"
console.log(MyYoutubeName)
console.log(anothername) //pass by value stack
let userOne ={
    email:"siddharth@gmail.com",
    upi: "sid@upi"
}
let userTwo= userOne
userTwo.email="kirti@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

