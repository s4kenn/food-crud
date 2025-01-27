const express = require('express')
const dotenv = require('dotenv')
const connectToDB = require('./database/index.js')
const FoodRouter = require('./router/index.js')
const app = express()
dotenv.config()


app.use(express.json())
connectToDB()

app.use('/api/food', FoodRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})