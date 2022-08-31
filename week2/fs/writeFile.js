const fs = require('fs')
const data = 'I am an Operatring System'

//Synchronous
fs.writeFileSync('./linux/index.txt', data, (error) =>{
    if(error){
        console.log(error)
    }
    console.log('done')
})