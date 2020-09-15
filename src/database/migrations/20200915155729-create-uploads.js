'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('uploads', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        field: 'id'
      },
      user_id: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        allowNull: false,
        field: 'user_id'
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'filename'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('uploads');
  }
};
