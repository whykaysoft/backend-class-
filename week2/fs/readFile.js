const fs = require('fs')

//Synchronous
//ReadFile
try{
    const data = fs.readFileSync('./linux/index.txt', 'utf-8')
    console.log(data)
}catch (error){
    console.log(error)
 }