const express = require('express');
const app = express();
const port = 5001;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

