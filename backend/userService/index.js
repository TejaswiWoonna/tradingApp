const express = require('express')
require('dotenv').config()
const app = express()
const helloRoutes = require(`./routes/hello.route`)
app.use('/', helloRoutes)
const person = [
    {
        id: 1,
        name: 'teju',
        email: 'teju@gmail.com',
    },

    {
        id: 2,
        name: 'teju',
        email: 'teju@gmail.com',
    },

    {
        id: 3,
        name: 'teju',
        email: 'teju@gmail.com',
    }
]
//GET, POST, PUT, DELETE
app.get('/hello', (req, res) => {
    try {
        res.send("hello world..")
    }
    catch (error) {
        console.log(error);
    }
})

app.get('/alluser', (req, res) => {
    try {
        res.send(person)
    }
    catch (error) {
        res.send('ERR')
    }
})

app.get('/alluser/:name', (req,res)=>{
    try{
        let name = req.params.name
        res.send(name)
    }catch(err){
        res.send('ERR')
    }
})

app.listen(process.env.PORT, () => {
    console.log('Server started at port')
})