'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prestamos', {
      id:                    { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      libro_id:              {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'libros',    key: 'id' }, onDelete: 'RESTRICT'
      },
      usuario_id:            {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'usuarios',  key: 'id' }, onDelete: 'RESTRICT'
      },
      fecha_prestamo:        { type: Sequelize.DATEONLY, allowNull: false },
      fecha_devolucion_esp:  { type: Sequelize.DATEONLY, allowNull: false },
      fecha_devolucion_real: { type: Sequelize.DATEONLY },
      createdAt:             { type: Sequelize.DATE },
      updatedAt:             { type: Sequelize.DATE }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('prestamos');
  }
};