const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'This is the main api route. Access the docs for more information. Thanks!'
  });
});

module.exports = router;
