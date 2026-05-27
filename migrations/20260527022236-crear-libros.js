'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('libros', {
      id:                 { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      titulo:             { type: Sequelize.STRING(200), allowNull: false },
      isbn:               { type: Sequelize.STRING(20),  allowNull: false, unique: true },
      anio_publicacion:   { type: Sequelize.INTEGER },
      copias_disponibles: { type: Sequelize.INTEGER, defaultValue: 1 },
      activo:             { type: Sequelize.BOOLEAN, defaultValue: true },
      createdAt:          { type: Sequelize.DATE },
      updatedAt:          { type: Sequelize.DATE }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('libros');
  }
};