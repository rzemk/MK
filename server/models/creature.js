/* eslint-disable func-names */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const creatureSchema = new Schema({
  name: { type: String, required: true },
  health: { type: Number, default: 100 },
  image: { type: String },
  win: { type: Number, default: 0 },
  loss: { type: Number, default: 0 },
});

module.exports = mongoose.model('Creature', creatureSchema);
