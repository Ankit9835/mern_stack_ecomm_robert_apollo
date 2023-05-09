const express = require('express')
const router = express.Router()
const {getData,createData,readData,updateData,removeData} = require('../controllers/userController')

router.get('/', getData)
router.post('/create', createData)
router.get('/read/:id', readData)
router.put('/update/:id', updateData)
router.delete('/remove/"id', removeData)

module.exports = router