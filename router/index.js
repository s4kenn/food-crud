const express = require('express')
const router = express.Router()

const { addFood, getFood, updateFood, deleteFood } = require('../controller/index.js')

router.get('/get', getFood)
router.post('/add', addFood)
router.put('/update/:id', updateFood)
router.delete('/delete/:id', deleteFood)


module.exports = router;