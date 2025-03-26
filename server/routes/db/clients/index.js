const express = require('express');
const router = express.Router();
const clientController = require('../../../db/controllers/clientController');

// get all clients
//router.get('/', (req, res) => {
//  res.json({ message: 'test', payload: null });
//});

router.get('/', clientController.getClients);
router.get('/create_test', clientController.createClient);

module.exports = router;
