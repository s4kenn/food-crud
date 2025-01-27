const mongoose = require('mongoose')
const FoodSchema = new mongoose.Schema({

    foodName: {
        type: String,
        required: true
    }, cuisine: {
        type: String,
        required: true
    }, category: {
        type: String,
        required: true
    }, availability: {
        type: Boolean,
        required: true
    }, price: {
        type: Number,
        required: true
    }, createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('foods', FoodSchema)