/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  name: { type: String, required: true },
  attack: { type: Number, required: true },
  image: { type: String },
});

module.exports = mongoose.model('Weapon', weaponSchema);
