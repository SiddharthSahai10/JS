let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toString())
// console.log(typeof(myDate))
//  let myCreatedDate= new Date(2025,1,28)
// console.log(myCreatedDate.toDateString())
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))
let newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)
console.log(newDate.toLocaleString('default',{
    weekday: "long",
 month: "long"   

}))

    
