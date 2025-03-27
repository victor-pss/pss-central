const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clientCode: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  status: { type: String, required: true },
  website_ids: { type: Object, required: false },
  location_id: { type: Object, required: false },
  service_ids: { type: Object, required: false },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Client = mongoose.model('Clients', clientSchema, 'Clients');

module.exports = Client;
