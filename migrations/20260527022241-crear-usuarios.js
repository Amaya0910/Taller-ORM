'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id:        { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nombre:    { type: Sequelize.STRING(150), allowNull: false },
      email:     { type: Sequelize.STRING(200), allowNull: false, unique: true },
      activo:    { type: Sequelize.BOOLEAN, defaultValue: true },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('usuarios');
  }
};