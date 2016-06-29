/* eslint-disable new-cap, no-param-reassign */

import express from 'express';
import Weapon from '../models/weapon';
const router = module.exports = express.Router();

router.get('/all', (req, res) => {
  console.log('weapon get');
  Weapon.find((err, weapons) => res.send({ weapons }));
});

router.post('/new', (req, res) => {
  console.log('weapon post', req.body);
  const weapon = new Weapon(req.body);
  weapon.save(() => {
    res.send({ weapon });
  });
});
