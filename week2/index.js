const animals = []
animals.push('cat')
animals.push('dog')
animals.push('fish')
animals.push('pig')
animals.unshift('cow')
// animals.pop()
// animals.shift()
 
//To iterate through an array
// animals.map((animal) => {
//     console.log(animal)
// })

console.log(animals)
let newAnimals = animals.find((animal) => animal == 'dog'
//return animal

)

newAnimals = 'elephant'
console.log(newAnimals)
console.log(animals)

//Functions

//Function Declarations
function addnumbers(a,b){
    const total = a+b
    console.log(total)
}
addnumbers(1,4)

//Function Expression
const addTotal = (a,b) =>{
    const total = a + b
    console.log(total)
}
addTotal(5,6)

