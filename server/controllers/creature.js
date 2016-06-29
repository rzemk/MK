/* eslint-disable new-cap, no-param-reassign */

import express from 'express';
import Creature from '../models/creature';
const router = module.exports = express.Router();

router.get('/all', (req, res) => {
  console.log('create get');
  Creature.find((err, creatures) => res.send({ creatures }));
});

router.post('/new', (req, res) => {
  console.log('create post', req.body);
  const creature = new Creature(req.body);
  creature.save(() => {
    res.send({ creature });
  });
});
