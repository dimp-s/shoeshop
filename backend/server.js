import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';

dotenv.config();
connectDatabase();
const app = express();

//load product.js from server
app.get('/api/products', (req, res) => {
  res.json(products);
});

//single product from product.js from server
app.get('/api/products/:id', (req, res) => {
  //code snippet from SingleProduct.js in frontend
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

//home api
app.get('/', (req, res) => {
  res.send('Api is running...!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('server hosted at:' + PORT));
