//Global
//_dirname
//_fileName

const {addnumbers,name} = require('./function') //require helps us import files
const sayHello = () =>{
    console.log(`hello ${name}`)
}
const path = __dirname //__dirname helps to trace the directory to path
console.log(path)

const file = __filename //__filename helps to trace up to the name of the file e.g node.js 
console.log(file)

//add numbers(1,4)
sayHello()
//console.log(addnumbers)