'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('libro_autores', {
      libro_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'libros',  key: 'id' }, onDelete: 'CASCADE'
      },
      autor_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'autores', key: 'id' }, onDelete: 'CASCADE'
      },
      orden:     { type: Sequelize.INTEGER, defaultValue: 1 },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE }
    });
    // Índice compuesto único: un autor no puede repetirse en el mismo libro
    await queryInterface.addIndex('libro_autores', ['libro_id', 'autor_id'], { unique: true });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('libro_autores');
  }
};