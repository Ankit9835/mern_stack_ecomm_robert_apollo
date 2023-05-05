const express = require('express')
const router = express.Router()
const {getData} = require('../controllers/apiController')

router.get('/', getData)

module.exports = router