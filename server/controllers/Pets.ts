import {Router} from 'express';
import {Pet} from "../models/Pet";

export const pets = Router();

pets.post('', async (req, res, next) => {
    try {
      const pets = await Pet.create(req.body);
      res.status(201).json(pets);
    } catch (e) {
      next(e);
    }
});

// pets.get('/:id', async (req, res, next) => {
//     try {
//         const todo = await Todo.scope(req.query['scope']).findById(req.params['id']);
//         res.json(todo);
//     } catch (e) {
//         next(e);
//     }
// });