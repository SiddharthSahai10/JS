function addtwonumbers(num1, num2){
    return (num1+num2)
}
console.log(addtwonumbers(7,3))
function addcartprice(k,l,...num1){ // rest operator
    return num1
}
console.log(addcartprice(100,200,300,400))
const user={
    username:"siddharth",
    hobby: "basketball" 
}
function callobject(anyobject){
    console.log(`username is ${anyobject.username} and hobby is ${anyobject.hobby}`);
    
}
callobject(user)