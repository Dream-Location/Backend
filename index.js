require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const port = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
    res.send("Welcome to Dream locations Api")
})

app.listen(port, ()=>{
    console.log(`listenig on http://localhost:${port}`)
})