(function addFigures (a, b){
    const total = a + b
    console.log(total)
})(1,7); //IIFE(Immediately Ivoked Function Expression)

const addTotal = (a, b) => {
    const total = a + b
    console.log(total)
}

const name = `John Doe`

module.exports= {addnumbers, name}