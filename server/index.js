const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Routes
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');

const cors = require("cors")

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB Connected successfully!');
  })
  .catch((err) => {
    console.log(err);
  });
// config
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);


app.listen(process.env.PORT_NUMBER || 5000, () => {
  console.log('Server is running');
});
