const getData = (req,res) => {
    res.send('category list')
}

const createData = (req,res) => {
    res.send('category add')
} 

const readData = (req,res) => {
    res.send('category read')
} 

const updateData = (req,res) => {
    res.send('category user')
} 

const removeData = (req,res) => {
    res.send('remove category')
} 

module.exports = {getData,createData,readData,updateData,removeData}