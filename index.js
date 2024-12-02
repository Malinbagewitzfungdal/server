const express = require('express')
const connectDB = require('./src/config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use (express.json())


app.listen(PORT, () => {
console.log(`listening on port: ${PORT}`)
})

