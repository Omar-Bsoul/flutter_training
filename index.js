const express = require('express');
const db = require('./db/connection');
const { User } = require('./db/models/user.model');

const app = express();

app.get('/users', async (req, res) => {
  res.send(await User.findAll());
});

app.get('/users/create', async (req, res) => {
  res.send(await User.create({
    id: '2b2966c5-e4b4-4927-8bbf-4d47da93d661',
    username: 'facebook_admin',
    password: '123456',
    firstName: 'facebook',
    lastName: 'admin',
  }));
});

app.get('/users/delete', async (req, res) => {
  res.send({
    count: await User.destroy({
      where: {
        id: '2b2966c5-e4b4-4927-8bbf-4d47da93d661'
      },
    }),
  });
});

app.listen(3000, () => {
  console.log(`App is listening on port ${3000}`);
});

