const Category = require('../models/CategoryModel')

const getData = async (req,res,next) => {
    try {
        const categories = await Category.find().sort({name: 'asc'}).orFail()
        res.json(categories)
    } catch (error) {
        next(error)
    }
}

const createData = async (req,res,next) => {
    try {
        const {category} = req.body
        const categoryCreated = await Category.findOne({name:category})
        if(categoryCreated){
            return res.json({
                status:false,
                message:'Category already exists'
            })
        } else {
            const newCategory = await Category.create({
                name:category
            })
            return res.json({
                status:true,
                message:'Category Created'
            })
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
} 

const readData = (req,res) => {
    res.send('category read')
} 

const updateData = (req,res,next) => {
    res.send('category user')
} 

const removeData = async (req,res,next) => {
    try {
        if(req.params.category !== 'Choose Category'){
            const categoryDelete = await Category.findOneAndDelete({
                name: req.params.name
            }).orFail()
            //console.log(category)
            //await categoryDelete.remove()
            res.json({
                categoryRemoved:true
            })
        }
    } catch (error) {
        next(error)
    }
} 

const categoryAttr = async (req,res,next) => {
    try {
        const {key,val,categoryChoosen} = req.body
        if(!key || !val || !categoryChoosen){
           return res.json({
                status:false,
                message:'All fields are required'
            })
        }
        const category = categoryChoosen.split('/')[0]
        const categoryExists = await Category.findOne({name:category})
      //  console.log('category',categoryExists)
        if(categoryExists.attrs.length > 0){
            let keyDoesNotExistsInDatabase = true
            categoryExists.attrs.map((item,idx) => {
                if(item.key == key){
                    keyDoesNotExistsInDatabase = false
                    let copyAttributes = [...categoryExists.attrs[idx].value]
                    copyAttributes.push(val)
                    var newAttributeValues = [...new Set(copyAttributeValues)] // Set ensures unique values
                    categoryExists.attrs[idx].value = newAttributeValues
                }
            })
            if(keyDoesNotExistsInDatabase) {
                categoryExists.attrs.push({key: key, value: [val]})
            }
        } else {
            categoryExists.attrs.push({key: key, value: [val]})
        }
        await categoryExists.save()
        let cat = await Category.find({}).sort({name: "asc"})
        return res.status(201).json({categoriesUpdated: cat})
    } catch (error) {
        next(error)
    }
}

module.exports = {getData,createData,readData,updateData,removeData,categoryAttr}