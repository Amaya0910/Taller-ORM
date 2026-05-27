'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('autores', {
      id:           { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nombre:       { type: Sequelize.STRING(100), allowNull: false },
      apellido:     { type: Sequelize.STRING(100), allowNull: false },
      nacionalidad: { type: Sequelize.STRING(80) },
      createdAt:    { type: Sequelize.DATE },
      updatedAt:    { type: Sequelize.DATE }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('autores');
  }
};