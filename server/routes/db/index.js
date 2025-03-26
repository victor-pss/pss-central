const express = require('express');
const router = express.Router();

const clientRoutes = require('./clients');

router.use('/clients', clientRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'db home api' });
});

module.exports = router;
