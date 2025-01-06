const name ="siddharth"
const repocount=50
//console.log(`my name is ${name} and my repocount is ${repocount}`);
const GameName = new String('Siddharth')
console.log(GameName.__proto__) //prototype is object
console.log(name.__proto__)
console.log(GameName.toUpperCase())
const newString= GameName.substring(0,4)
console.log(newString);
const newString2=GameName.slice(-3,4)
console.log(newString2)
const strings="hi i am siddharth"
console.log(strings.replace('siddharth'),('kirti')) //replace
