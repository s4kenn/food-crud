const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectToDB = async () => {
    try {
        mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9yny4.mongodb.net/foodDB`)
        console.log(`MongoDB connection successful`);
    } catch (error) {
        console.log('MongoDB connection failed')
    }
}

module.exports = connectToDB