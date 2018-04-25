import {Router} from 'express';
import {Order} from "../models/Order";

export const orders = Router();

orders.get('/', async (req, res, next) => {
  try {
    console.log('kiwi de order');
    const orders = await Order.scope(req.query['scope']).findAll();
    res.status(200).json(orders);
  } catch (e) {
    next(e);
  }
});

orders.post('', async (req, res, next) => {
    try {
      const orders = await Order.create(req.body);
      res.status(201).json(orders);
    } catch (e) {
      next(e);
    }
});

orders.get('/:id', async (req, res, next) => {
    try {
        const orders = await Order.scope(req.query['scope']).findById(req.params['id']);
        res.status(200).json(orders);
    } catch (e) {
        next(e);
    }
});

orders.delete('/:id', async (req, res, next) => {
  try {
      const orders = await Order.destroy({
        where: {
            id: req.params.id
        }
    })
      
      //destroy(req.params['id']);
      res.status(200).json(orders);
  } catch (e) {
      next(e);
  }
});