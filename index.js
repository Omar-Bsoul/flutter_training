const express = require('express');
const db = require('./db/connection');

const app = express();

app.post('/users', async (req, res) => {
});

app.listen(3000, () => {
  console.log(`App is listening on port ${3000}`);
});

