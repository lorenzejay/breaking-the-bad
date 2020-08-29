const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  power: Number,
  defense: Number,
  img: String,
  actor: String,
  bcsAppearance: Boolean
});

module.exports = mongoose.model('Character', characterSchema);