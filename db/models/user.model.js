const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../connection');

class User extends Model {
  id;
  username;
  password;
  firstName;
  lastName;
  createdAt;
  updatedAt;
  deletedAt;
}

User.init({
  id: {
    allowNull: false,
    type: DataTypes.STRING,
    primaryKey: true,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  sequelize: sequelize,
  modelName: 'Users',
  paranoid: true,
});

exports.User = User;