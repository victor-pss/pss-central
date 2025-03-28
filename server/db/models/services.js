const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: false },
  description: { type: String, required: false },
  status: { type: String, required: false },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Services = mongoose.model('Services', serviceSchema, 'Services');

module.exports = Services;
