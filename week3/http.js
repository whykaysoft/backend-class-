const http = require('http')
console.log(http)

const server = http.createServer((req, res)=>{
    // res.write()
    res.end(`Hello from the server`)

    if (req.url === '/'){
        res.end(`Home Page`)
    }else if(req.url === '/about'){
        res.end(`About Us Page`)
    }else if(req.url === '/contact'){
        res.end(`Contact Us Page`)
    }else{
        res.end(`404 Page Not Found`)
    }
})


server.listen(5000, ()=> {
    console.log(`server is running on port 5000`)
})