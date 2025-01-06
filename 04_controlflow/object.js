const myobject={
    js: "javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobject) {
   console.log(`${key} shortcut is for ${myobject[key]}`) // iterating through object
}

const programming=["js", "rb","py","java"]
for (const key in programming) {
    console.log(key ,":-", programming[key]) ;
    

}