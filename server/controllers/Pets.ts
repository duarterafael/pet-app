import {Router} from 'express';
import {Pet} from "../models/Pet";

export const pets = Router();

/**
 * Retrieve all pets.
 * @route GET /pets
 * @group Pets - Operations about pets
 * @returns {object} 200 - An array of user info
 */
pets.get('/', async (req, res, next) => {
  try {
    const pets = await Pet.scope(req.query['scope']).findAll();
    res.status(200).json(pets);
  } catch (e) {
    next(e);
  }
});

/**
 * Save a pet.
 * @route POST /pets
 * @group Pets - Operations about pets
 * @returns {Pet.model} 201 - A new pet infos 
 * @returns {Error}  default - Unexpected error
 */
pets.post('', async (req, res, next) => {
    try {
      const pets = await Pet.create(req.body);
      res.status(201).json(pets);
    } catch (e) {
      next(e);
    }
});

pets.put('/:id', async (req, res, next) => {
    try {
        const pet = await Pet.scope(req.query['scope']).findById(req.params['id']);
        if(null == pet)
        {
            res.status(400).json();
        }else
        {
            await Pet.update(
                 req.body ,
                { where: { id: req.params['id'] }}
            );
            res.status(200).json();
        }
    } catch (e) {
        next(e);
    }
});

pets.get('/:id', async (req, res, next) => {
    try {
        const pet = await Pet.scope(req.query['scope']).findById(req.params['id']);
        if(null != pet)
        {
            res.status(200).json(pet);
        }
        res.status(400).json();
    } catch (e) {
        next(e);
    }
});

pets.delete('/:id', async (req, res, next) => {
  try {
    const pet = await Pet.scope(req.query['scope']).findById(req.params['id']);
    if(null == pet)
    {
        res.status(400).json();
    }else
    {
        await Pet.destroy({
            where: {
                id: req.params.id
            }
        })
      res.status(200).json();
    }
  } catch (e) {
      next(e);
  }
});