import express from 'express';
import User from './models/UserModel.js';
import users from './data/Users.js';
import Product from './models/ProductModel.js';
import products from './data/Products.js';
import asyncHandler from 'express-async-handler';

//for backend api route
const importData = express.Router();

//postrequest to add users
importData.post(
  '/users',
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

importData.post(
  '/products',
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProduct = await Product.insertMany(products);
    res.send({ importProduct });
  })
);

export default importData;
