import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import importData from './DataImport.js';
import productRoute from './routes/ProductRoutes.js';
import { errorHandler, notFound } from './middleware/Error.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();
connectDatabase();
const app = express();

// //load product.js from server
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// //single product from product.js from server
// app.get('/api/products/:id', (req, res) => {
//   //code snippet from SingleProduct.js in frontend
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

//positioning matters here !!
//api data (users and products) from backend through post request and add to db
app.use('/api/import', importData);
//api to get list of products GET request
app.use('/api/products', productRoute);
//login api
app.use(express.json());
app.use('/api/users', userRouter);

//middleware error handling
app.use(notFound);
app.use(errorHandler);

//home api
app.get('/', (req, res) => {
  res.send('Api is running...!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('server hosted at:' + PORT));
