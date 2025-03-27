// service routes
const express = require('express');
const router = express.Router();
const serviceController = require('../../../db/controllers/serviceController');

// get all services
//router.get('/', (req, res) => {
//  res.json({ message: 'test', payload: null });
//});

// /api/db/services/

router.get('/', serviceController.getServices);
router.get('/url', serviceController.getServiceByName);
router.get('/status/:status', serviceController.getServicesByStatus);

router.post('/create_test', serviceController.createService);

router.get('/:id', serviceController.getServiceById);
router.put('/:id', serviceController.updateServiceById);
router.delete('/:id', serviceController.deleteServiceById);

module.exports = router;
