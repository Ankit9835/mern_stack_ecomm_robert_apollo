const paginate = require('../config/pagination')
const Product = require('../models/product')

const getData = async (req,res) => {
    try {
        const product = await Product.find().sort({name:1}).limit(paginate)
        res.json(product)
    } catch (error) {
        console.log(error)
    }
}

const createData = (req,res) => {
    res.send('product add')
} 

const readData = (req,res) => {
    res.send('product read')
} 

const updateData = (req,res) => {
    res.send('product user')
} 

const removeData = (req,res) => {
    res.send('remove product')
} 

module.exports = {getData,createData,readData,updateData,removeData}