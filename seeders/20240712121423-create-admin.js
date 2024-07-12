'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      usertype: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      password: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { usertype: 'admin' });
  }
};
