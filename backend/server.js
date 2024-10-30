const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('DB connected')
})

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    console.log('yay')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running')
})