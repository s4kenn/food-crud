const Food = require('../model/index.js')

const addFood = async (req, res) => {

    try {

        const FoodFormData = req.body
        const newFoodData = await Food.create(FoodFormData)
        if (newFoodData) {
            res.status(201).json({
                success: true,
                message: "Food Added Successfully",
                data: newFoodData
            })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }

}

const getFood = async (req, res) => {

    try {

        const foodData = await Food.find()
        const totalFood = await Food.countDocuments()
        if (foodData) {
            res.status(200).json({
                success: true,
                message: "Food Data Retrieved Successfully",
                data: foodData,
                total: totalFood
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No Food Data Found"
            })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }

}

const updateFood = async (req, res) => {

    try {

        const id = req.params.id
        const updatedFoodData = req.body
        const updatedFood = await Food.findByIdAndUpdate(id, updatedFoodData, {
            new: true
        })

        if (updatedFood) {
            res.status(200).json({
                success: true,
                message: "Food Data Updated Successfully",
                data: updatedFood,
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No Food Data Found"
            })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }

}

const deleteFood = async (req, res) => {

    try {

        const id = req.params.id
        const deletedFood = await Food.findByIdAndDelete(id)

        if (deletedFood) {
            res.status(200).json({
                success: true,
                message: "Food Data deleted Successfully",
                data: deletedFood,
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No Food Data Found"
            })
        }


    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }

}

module.exports = { addFood, getFood, updateFood, deleteFood }