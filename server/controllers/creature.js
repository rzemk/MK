<<<<<<< HEAD
/* eslint-disable new-cap, no-param-reassign, max-len */
=======
/* eslint-disable new-cap, no-param-reassign */
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10

import express from 'express';
import Creature from '../models/creature';
const router = module.exports = express.Router();

router.get('/all', (req, res) => {
  console.log('create get');
  Creature.find((err, creatures) => res.send({ creatures }));
});

<<<<<<< HEAD
router.get('/:id/find', (req, res) => {
  console.log('create find', req.params.id);
  Creature.findById(req.params.id, (err, creature) => { console.log('server find', err, creature);res.send({ creature })});
});

=======
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10
router.post('/new', (req, res) => {
  console.log('create post', req.body);
  const creature = new Creature(req.body);
  creature.save(() => {
    res.send({ creature });
  });
});
<<<<<<< HEAD

router.put('/:id/update', (req, res) => {
  console.log('creature upate', req.params.id, req.body);
  Creature.findByIdAndUpdate(req.params.id, { win: req.body.win, loss: req.body.loss }, (err1, creature) => {
    res.send({ creature });
  });
});
=======
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10
