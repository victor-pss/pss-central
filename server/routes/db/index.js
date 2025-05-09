const express = require('express');
const router = express.Router();

const clientRoutes = require('./clients');
const websiteRoutes = require('./websites');
const locationRoutes = require('./locations');
const serviceRoutes = require('./services');

router.use('/clients', clientRoutes);
router.use('/websites', websiteRoutes);
router.use('/locations', locationRoutes);
router.use('/services', serviceRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'db home api' });
});

module.exports = router;
