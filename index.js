const express = require('express');
const bodyParser = require('body-parser');

const { usersRouter } = require('./apis/users.apis');
require('./db/connection');

const app = express();

app.use(bodyParser.json());
app.use('/users', usersRouter);

app.use((error, req, res, next) => {
  if (error) {
    console.error(error);
    res.status(error.status).send({
      message: error.message,
      error,
    });
  }
});

app.listen(3000, () => {
  console.log(`App is listening on port ${3000}`);
});
