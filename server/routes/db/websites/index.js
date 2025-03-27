// website routes
const express = require('express');
const router = express.Router();
const websiteController = require('../../../db/controllers/websiteController');

// get all websites
//router.get('/', (req, res) => {
//  res.json({ message: 'test', payload: null });
//});

// /api/db/websites/

router.get('/', websiteController.getWebsites);
router.get('/url', websiteController.getWebsiteByUrl);
router.get('/status/:status', websiteController.getWebsitesByStatus);

router.post('/create_test', websiteController.createWebsite);

router.get('/:id', websiteController.getWebsiteById);
router.put('/:id', websiteController.updateWebsiteById);
router.delete('/:id', websiteController.deleteWebsiteById);

module.exports = router;
