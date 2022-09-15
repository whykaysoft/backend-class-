const express = require(`express`)
const name = require(`./data`)

const app = express()
app.use(express.json())

// //CRUD HTTP VERBS
// app.get(`/name`, (req, res) => {
//     res.status(200).send(name)
// })


// app.post(`/name`, (req, res) =>{
//     console.log(req.body)
//     res.status(200).send(`name`)
// })

app.post(`/name`, (req, res) => {
 const person = req.body
 name.push(person)
 res.status(201).send(name)
})

app.get(`/name/:personId`, (req, res) => {
    const id = req.params.personId
    const onePerson = name.find((person) => person.id == id)
    res.status(200).send(onePerson)
})

app.put(`/name/:personId`, (req, res) =>{
    const payload = req.body
    const id = req.params.personId
    const onePerson = name.find((person) => person.id == id)
    onePerson.class = payload.class
    res.status(200).send(onePerson)
})

app.delete(`/name/:personId`, (req, res) =>{
    const id = req.params.personId
    const onePerson = name.filter((person) => person.id !== Number(id))
    res.status(200).send(onePerson)
})

app.listen(50000, () =>{
    console.log('port 50.000')
})