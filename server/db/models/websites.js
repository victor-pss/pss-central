const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
  url: { type: String, required: true },
  ip: { type: String, required: true },
  dns_hosts: { type: Object, required: false },
  registrar: { type: String, required: false },
  isProduction: { type: String, required: false },
  status: { type: String, required: false },
  ssl_status: { type: String, required: false },
  last_checked: { type: Date, required: false },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Websites = mongoose.model('Websites', websiteSchema, 'Websites');

module.exports = Websites;
