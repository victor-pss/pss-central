const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: Object, required: false }, // street, city, state, zip, country
  phone: { type: String, required: false },
  email: { type: String, required: false },
  status: { type: String, required: false },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Locations = mongoose.model('Locations', locationSchema, 'Locations');

module.exports = Locations;
