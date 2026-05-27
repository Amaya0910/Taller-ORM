'use strict';

module.exports = {
  async up(queryInterface) {
    //AUTORES
    await queryInterface.bulkInsert('autores', [
      { nombre: 'Gabriel', apellido: 'García Márquez', nacionalidad: 'Colombiano', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Isabel',  apellido: 'Allende',        nacionalidad: 'Chilena',    createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Jorge',   apellido: 'Luis Borges',    nacionalidad: 'Argentino',  createdAt: new Date(), updatedAt: new Date() }
    ]);

    //LIBROS
    await queryInterface.bulkInsert('libros', [
      { titulo: 'Cien años de soledad',      isbn: '978-0-06-088328-7',   anio_publicacion: 1967, copias_disponibles: 3, activo: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'La casa de los espíritus',  isbn: '978-0-553-38380-1',   anio_publicacion: 1982, copias_disponibles: 2, activo: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'El amor en los tiempos del cólera', isbn: '978-0-307-38987-6', anio_publicacion: 1985, copias_disponibles: 2, activo: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Ficciones',                 isbn: '978-0-8021-3234-7',   anio_publicacion: 1944, copias_disponibles: 4, activo: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Eva Luna',                  isbn: '978-0-553-38388-7',   anio_publicacion: 1987, copias_disponibles: 1, activo: true, createdAt: new Date(), updatedAt: new Date() }
    ]);

    // USUARIOS
    await queryInterface.bulkInsert('usuarios', [
      { nombre: 'Carlos Pérez',  email: 'carlos.perez@email.com',  activo: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Laura Gómez',   email: 'laura.gomez@email.com',   activo: true, createdAt: new Date(), updatedAt: new Date() }
    ]);

    //RELACIONES LIBRO-AUTOR 
    await queryInterface.bulkInsert('libro_autores', [
      { libro_id: 1, autor_id: 1, orden: 1, createdAt: new Date(), updatedAt: new Date() },
      { libro_id: 2, autor_id: 2, orden: 1, createdAt: new Date(), updatedAt: new Date() },
      { libro_id: 3, autor_id: 1, orden: 1, createdAt: new Date(), updatedAt: new Date() },
      { libro_id: 4, autor_id: 3, orden: 1, createdAt: new Date(), updatedAt: new Date() },
      { libro_id: 5, autor_id: 2, orden: 1, createdAt: new Date(), updatedAt: new Date() }
    ]);

    // PRESTAMOS
    await queryInterface.bulkInsert('prestamos', [
      {
        libro_id: 1, usuario_id: 1,
        fecha_prestamo:       '2026-05-01',
        fecha_devolucion_esp: '2026-05-15',
        fecha_devolucion_real: null,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        libro_id: 4, usuario_id: 2,
        fecha_prestamo:       '2026-04-10',
        fecha_devolucion_esp: '2026-04-24',
        fecha_devolucion_real: '2026-04-22',
        createdAt: new Date(), updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('prestamos',    null, {});
    await queryInterface.bulkDelete('libro_autores', null, {});
    await queryInterface.bulkDelete('libros',       null, {});
    await queryInterface.bulkDelete('usuarios',     null, {});
    await queryInterface.bulkDelete('autores',      null, {});
  }
};