const mynumbers=[1,2,3,4,5,6,7]
// const newnums=mynumbers.map( (num) => num+10) //agar scoe open kroge then return is important
// console.log(newnums);
const newnums = mynumbers
.map((num)=> num*10)
.map((num)=> num+1) 
.filter((num)=> num>=40)
console.log(newnums);
