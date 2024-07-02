const express = require('express')
const mongoose = require('mongoose')

const userRouter = require('./routers/user')
const bookRouter = require('./routers/task')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_CONNECTION_STRING)

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(bookRouter)

app.listen(3000, () => {
    console.log('Server has started functioning!')
})