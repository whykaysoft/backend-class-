//PATH MODULE

const path = require ('path')
// console.log(path)
//console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'readMe.text')
// console.log(filePath)
//console.log(path.extname(filePath))

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
