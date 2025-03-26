const express = require('express');
const connectDB = require('./db/connect');
const cors = require('cors');

const app = express();
const port = 5001;

const apiRoutes = require('./routes/api');
const dbRoutes = require('./routes/db');

app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.json({ message: "Thanks for accessing Central. If you met this page, please contact the admin for help." });
});

app.use('/api', apiRoutes);
app.use('/api/db', dbRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

