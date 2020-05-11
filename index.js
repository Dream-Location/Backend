require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const port = process.env.PORT || 4000
const authRouter = require('./routers/authRouter')
const locationRouter = require('./routers/locationRouter')

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/location', locationRouter)

app.get('/', (req, res) => {
    res.send("Welcome to Dream locations Api")
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})