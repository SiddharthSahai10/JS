//                             IMMIDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
(function chai(){
    console.log("DB CONNECTED")
})();
( (name) =>{
    console.log("DB TWO CONNECTED",name);
    
}) ("siddharth") //jaldi se function run krdega iife and global variables wont pollute inside variables
