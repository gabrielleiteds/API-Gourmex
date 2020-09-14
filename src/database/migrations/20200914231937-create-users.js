'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
				field: 'id'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
				field: 'name'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
				field: 'email'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
				field: 'password'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
