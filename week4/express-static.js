const express = require(`express`)
const path = require(`path`)

const app = express()
app.use(express.static('./HTML'))

// app.get(`/`, (req, res) =>{
//     res.status(200).sendFile(path.resolve(__dirname, './HTML/index.html'))
// })

app.listen(50000, () =>{
    console.log(`Server is running on Port 50000`)
})