module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: '135a0412-9ac5-40b2-af2c-72a921a6d0db',
        username: 'admin',
        password: '123456',
        firstName: 'super',
        lastName: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {});
  },
};
