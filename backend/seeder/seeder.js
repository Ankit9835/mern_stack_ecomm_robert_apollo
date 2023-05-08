
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const connectDB = (url) => {
    return mongoose.connect(url)
}

const dbConfig = require("../config/dbConfig");
const Category = require('../models/CategoryModel')
const categoryData = require('./categories')
const Product = require('../models/product')
const Review = require('../models/review')
const User = require('../models/UserModel')
const Order = require('../models/OrderModel')
const productData = require('./products')
const reviewData = require('./review');
const userData = require('./user')
const orderData = require('./orders')
const products = require('./products');


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Category.collection.dropIndexes()
    await Product.collection.dropIndexes()
    await Review.collection.dropIndexes()
    await User.collection.dropIndexes()
    await Order.collection.dropIndexes()

    await Category.deleteMany();
    await Category.create(categoryData);

    

    await Product.deleteMany();
    

    await Review.deleteMany();
    const reviews = await Review.create(reviewData);
    const sampleProduct = productData.map((product) => {
        reviews.map((review) => {
            product.reviews.push(review._id)
        })
        return {...product}
    })
    await Product.create(productData);
    await User.deleteMany();
    await User.create(userData);

    await Order.deleteMany();
    await Order.create(orderData);
    console.log('Success!!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();