const express = require('express')
require('dotenv').config()
const dbConfig = require("./config/dbConfig");
const app = express()
const apiRoutes = require('./routes/apiRoutes')
const userRoutes = require('./routes/userRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')


app.use(express.json())
app.use('/api/v1/auth', userRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/orders', orderRoutes)

app.use((err,req,res,next) => {
 console.log(err)
 next(err)
})

app.use((err,req,res,next) => {
  res.status(500).json({
    message:err.message,
    stack:err.stack
  })
})

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();


