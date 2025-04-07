const express = require('express');
const router = express.Router();
const clientController = require('../../../db/controllers/clientController');

// get all clients
//router.get('/', (req, res) => {
//  res.json({ message: 'test', payload: null });
//});

// /api/db/clients/
router.get('/', clientController.getClients);
router.post('/', clientController.createClient);

router.get('/name', clientController.getClientByName);
router.get('/status/:status', clientController.getClientsByStatus);

router.get('/:id', clientController.getClientById);
router.put('/:id', clientController.updateClientById);
router.delete('/:id', clientController.deleteClientById);

module.exports = router;
