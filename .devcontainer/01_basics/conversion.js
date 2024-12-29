let score ="33sid"
let score1= null
let score2= true
let score3=1
console.log(typeof(score))
console.log(typeof score)
let valueInNumber= Number(score)
let valueInNumber1= Number(score1)
let valueInNumber2= Number(score2)
let valueInNumber3=Boolean(score3)
console.log(typeof valueInNumber)
console.log(typeof valueInNumber1)
console.log(typeof score1)
console.log(typeof valueInNumber2)
console.log(typeof valueInNumber3)
console.log(valueInNumber) // valueInNumber has number stored in it but it is "not a number"(NaN) EXPLICIT CONVERSION BASICALLY
console.log(valueInNumber1) // null value is typecasted to 0 
console.log(valueInNumber2) // true value is 1
console.log(valueInNumber3) // if score3 is empty string then typecasted to false, if score3 is any string it will typecast true