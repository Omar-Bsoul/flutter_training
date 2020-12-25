module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addIndex('Users', ['username']);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Users', ['username']);
  },
};
