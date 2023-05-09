const getData = (req,res) => {
    res.send('user list')
}

const createData = (req,res) => {
    res.send('user add')
} 

const readData = (req,res) => {
    res.send('user read')
} 

const updateData = (req,res) => {
    res.send('update user')
} 

const removeData = (req,res) => {
    res.send('remove user')
} 

module.exports = {getData,createData,readData,updateData,removeData}