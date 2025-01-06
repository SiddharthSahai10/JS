const coding=["js", "ruby", "java", "python"]
// coding.forEach(function(val){
//     console.log(val)
// })
// coding.forEach((item)=>{
//     console.log(item)
// })
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)
// const values=coding.forEach((item)=>{
//     console.log(item); 
// })
// console.log(values);// foreach cant return values
const mynums=[1,2,3,4,5,6,7]

// const newnums=mynums.filter((num)=>num>4) // conditional
// console.log(newnums)// filter can return 
// const newnums1=mynums.filter((num)=>{ //by arrow methods
//    return num>4
// }) // conditional
// console.log(newnums1)// filter can return 
const newnums=[]
mynums.forEach( (num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums) 