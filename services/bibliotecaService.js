const { Op } = require('sequelize');
const sequelize = require('../database');
const { Autor, Libro, Usuario, Prestamo } = require('../models');

async function registrarLibro(datosLibro, autorIds) {
  const libro = await Libro.create(datosLibro);
  await libro.addAutors(autorIds);         
  return libro;
}

async function listarLibros() {
  return Libro.findAll({
    where: { activo: true },
    include: [{ model: Autor, through: { attributes: [] } }],
    order: [['titulo', 'ASC']]
  });
}

async function registrarPrestamo(libroId, usuarioId, fechaDevEsperada) {
  const t = await sequelize.transaction();
  try {
    const libro = await Libro.findByPk(libroId, { transaction: t, lock: true });

    if (!libro || libro.copias_disponibles < 1)
      throw new Error('No hay copias disponibles');

    const prestamo = await Prestamo.create({
      libro_id: libroId, usuario_id: usuarioId,
      fecha_prestamo: new Date(),
      fecha_devolucion_esp: fechaDevEsperada
    }, { transaction: t });

    await libro.decrement('copias_disponibles', { by: 1, transaction: t });
    await t.commit();
    return prestamo;
  } catch (err) {
    await t.rollback();
    throw err;
  }
}


async function registrarDevolucion(prestamoId) {
  const t = await sequelize.transaction();
  try {
    const prestamo = await Prestamo.findByPk(prestamoId, { transaction: t });
    if (!prestamo) throw new Error('Préstamo no encontrado');

    await prestamo.update({ fecha_devolucion_real: new Date() }, { transaction: t });
    await Libro.increment('copias_disponibles',
      { by: 1, where: { id: prestamo.libro_id }, transaction: t });

    await t.commit();
    return prestamo;
  } catch (err) {
    await t.rollback();
    throw err;
  }
}

async function prestamosActivos() {
  return Prestamo.findAll({
    where: { fecha_devolucion_real: null },
    include: [
      { model: Libro,   as: 'libro'   },
      { model: Usuario, as: 'usuario' }
    ]
  });
}

module.exports = { registrarLibro, listarLibros, registrarPrestamo,
                   registrarDevolucion, prestamosActivos };