const express = require('express')
require('dotenv').config()
const dbConfig = require("./config/dbConfig");
const app = express()
const apiRoutes = require('./routes/apiRoutes')

app.use(express.json())
app.use('/api', apiRoutes)

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


