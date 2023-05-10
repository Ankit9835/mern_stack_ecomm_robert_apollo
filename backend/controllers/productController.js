const paginate = require('../config/pagination')
const Product = require('../models/product')

const getData = async (req,res) => {
    try {

        let query = {}
        let priceQueryCondition = {}
        let ratingQueryCondition = []
        let queryCondition = false

        if(req.query.price){
            queryCondition = true
            priceQueryCondition = {price: {$lte:req.query.price}}
        }

        if(req.query.rating){
            queryCondition = true
            ratingQueryCondition = {rating: {$in: req.query.rating.split(',')}}
        }

        if(queryCondition){
            query = {
                $and: [priceQueryCondition, ratingQueryCondition]
            }
        }



        const pageNum = Number(req.query.pageNum || 1)


        const totalProducts = await Product.countDocuments({})
        let sort = {}
        let sortOptions = req.query.sort || ""
        if(sortOptions){
            sortOptions = sortOptions.split('_')
            sort = {[sortOptions[0]]: Number(sortOptions[1])}
        }
        const product = await Product.find(query).skip(paginate * (pageNum - 1)).sort(sort).limit(paginate)

        res.json({
            product,
            pageNum,
            paginationLinkNumber: Math.ceil(totalProducts / pageNum)
        })
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