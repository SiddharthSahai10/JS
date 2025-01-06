const myarr=[1,2,3,4,5]
console.log(myarr)
myarr.push(28)
console.log(myarr)
myarr.shift() //first element removed
console.log(myarr)
myarr.pop() //last element removed
console.log(myarr)
console.log(myarr.includes(4)) // array method
console.log(myarr.indexOf(4)) // array method
const newArr= myarr.join() // converts array to string
console.log(newArr);
console.log(typeof(newArr))
console.log("A", myarr)
const myn1=myarr.slice(1,3)//slicing includes first index and not includes last index [..,..,)
console.log("slice =", myn1)
console.log("B", myarr);
const myn2= myarr.splice(1,3)//splicing the array in splice this changes the original array and removes the spliced elements
console.log("splice =", myn2)
console.log("C", myarr)