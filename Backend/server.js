import express from 'express';
import dotenv from 'dotenv';
import products from './Products.js';
dotenv.config();
import connectDB from './config/db.js';
const port = process.env.PORT || 8000;
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
