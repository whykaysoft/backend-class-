//Asynchronous nature of node
//Variables: syntax and scope
//Class, Object and Arrays, Accessing Items (dot and bracket notation)

setTimeout(()=> {
    console.log('Statement Number One')
}, 9000)
console.log('Statement Number One')
console.log('Statement Number Two')
console.log('Statement Number Three')

console.log('Statement Number Two')
console.log('Statement Number One')
console.log('Statement Number Three')

//Class in JS
//Classes are templates for creating Objects


const animals = {
    name: 'dog',
    sound: 'bark'
    // console.log(animals);
}
console.log(animals);

class Animals {
constructor(name, sound){
    this.name = name;
    this.sound = sound;
}
}

const newAnimal = new Animals('pig', 'grunt')
const newAnimal2 = new Animals('cow', 'mow')

const animalcollection = [newAnimal]


