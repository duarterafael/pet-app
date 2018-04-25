import {Router} from 'express';
import {Pet} from "../models/Pet";

export const pets = Router();

pets.get('/', async (req, res, next) => {
  try {
    const pets = await Pet.scope(req.query['scope']).findAll();
    res.status(200).json(pets);
  } catch (e) {
    next(e);
  }
});

pets.post('', async (req, res, next) => {
    try {
      const pets = await Pet.create(req.body);
      res.status(201).json(pets);
    } catch (e) {
      next(e);
    }
});

pets.get('/:id', async (req, res, next) => {
    try {
        const pet = await Pet.scope(req.query['scope']).findById(req.params['id']);
        res.status(200).json(pet);
    } catch (e) {
        next(e);
    }
});

pets.delete('/:id', async (req, res, next) => {
  try {
      const pet = await Pet.destroy({
        where: {
            id: req.params.id
        }
    })
      
      //destroy(req.params['id']);
      res.status(200).json(pet);
  } catch (e) {
      next(e);
  }
});