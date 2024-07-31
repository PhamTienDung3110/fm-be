require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./src/routes');

require('./src/config/db');

app.use(express.json());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
