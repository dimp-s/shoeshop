import express from 'express';
import asyncHandler from 'express-async-handler';
import protect from '../middleware/AuthMiddleware.js';
import Order from './../models/OrderModel.js';

const orderRouter = express.Router();

//post order by getting from request
orderRouter.post(
  '/',
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;
    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error('No order items');
      return;
    } else {
      const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  })
);

export default orderRouter;
