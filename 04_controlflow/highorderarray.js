const arr=[1,2,3,45,5]
for (const i of arr) {
   // console.log(i)
    
}
const greetings="hello nameste duniya"
for (const greet of greetings) {
   // console.log(`each character is${greet}`);
}
 // map
 const map = new Map()
 map.set('IN', 'India')
 map.set('USA', 'United States OF America')
 map.set('FR', 'France')
 //console.log(map);
 for (const key of map) {
   // console.log(key)
 }
 for (const [key, val] of map) {
    console.log(key,":-", val)
 }
 const myobject={
    'game1': "NFS",
    'game2':"spiderman"
 }
// for (const [key,value] of myobject) {
//     console.log(key, ":-", value);
    
    
// } // object not iteratable

