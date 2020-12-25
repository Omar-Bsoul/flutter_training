const express = require('express');
const { User } = require('../db/models/user.model');
const { validateString } = require('../validators/validateString');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await User.findAll());
});

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, username, password } = req.body;

    // validation
    validateString(firstName, 2, 'firstName');
    validateString(lastName, 2, 'lastName');
    validateString(username, 5, 'username');
    validateString(password, 5, 'password');
    const count = await User.count({
      where: {
        username,
      },
    });

    if (count !== 0) {
      const error = new Error('username exists');
      error.status = 400;

      throw error;
    }

    // create user
    const user = await User.create({
      firstName,
      lastName,
      username,
      password,
    });

    // map and return user
    const { password: _, ...userDto } = user.toJSON();
    res.send(userDto);
  } catch (error) {
    next(error);
  }
});

router.delete('/:username', async (req, res) => {
  const username = req.params.username;

  const deletedRowsCount = await User.destroy({
    where: {
      username: username,
    },
  });

  res.send({
    success: Boolean(deletedRowsCount),
  });
});

exports.usersRouter = router;
