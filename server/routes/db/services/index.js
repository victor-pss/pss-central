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
router.post('/', serviceController.createService);

router.get('/name', serviceController.getServiceByName);
router.get('/status/:status', serviceController.getServicesByStatus);


router.get('/:id', serviceController.getServiceById);
router.put('/:id', serviceController.updateServiceById);
router.delete('/:id', serviceController.deleteServiceById);

module.exports = router;
