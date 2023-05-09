const express = require('express')
const router = express.Router()
const {getData,createData,readData,updateData,removeData,categoryAttr} = require('../controllers/categoryController')

router.get('/', getData)
router.post('/create', createData)
router.get('/read/:id', readData)
router.put('/update/:id', updateData)
router.delete('/remove/:name', removeData)
router.post('/category/attr', categoryAttr)

module.exports = router