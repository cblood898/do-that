const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const List = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model( 'List', List );