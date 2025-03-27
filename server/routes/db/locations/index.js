// location routes
const express = require('express');
const router = express.Router();
const locationController = require('../../../db/controllers/locationController');

// get all locations
//router.get('/', (req, res) => {
//  res.json({ message: 'test', payload: null });
//});

// /api/db/locations/

router.get('/', locationController.getLocations);
router.get('/name', locationController.getLocationByName);
router.get('/status/:status', locationController.getLocationsByStatus);

router.post('/create_test', locationController.createLocation);

router.get('/:id', locationController.getLocationById);
router.put('/:id', locationController.updateLocationById);
router.delete('/:id', locationController.deleteLocationById);

module.exports = router;
