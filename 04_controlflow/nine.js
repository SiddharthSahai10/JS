const mynums=[1,2,3]
// const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`accumulator:${acc} and currval:${currval}`)
//     return acc+currval
// },0) // 0 is initial value given to accumulator
// console.log(mytotal);// accumulator ,currentvlue,initial value
const mytotal = mynums.reduce((acc, curr) => acc + curr, 0);
console.log(mytotal);
const shoppingcart=[
    {
        itemname:"js course",
        price:2999
    },
    
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },

]

const pricetoppay=shoppingcart.reduce((acc,item) =>acc  + item.price,0)
    console.log(pricetoppay);
    

