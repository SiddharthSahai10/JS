const marvel_heros=["ironman", "thor", "hulk"]
const dc_heros=["aquaman", "superman","batman"]
//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);
const all_new_heros=[...marvel_heros,...dc_heros] //spread operator
console.log(all_new_heros)
const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarr= anotherarr.flat(2)
console.log(realanotherarr);
console.log(Array.isArray("siddharth")) //tells where it is array or not
console.log(Array.from("siddharth")); // converts into array
score1=100
score2=200
score3 =300
console.log(Array.of(score1,score2,score3));

