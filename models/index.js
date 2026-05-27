const Autor    = require('./Autor');
const Libro    = require('./Libro');
const Usuario  = require('./Usuario');
const Prestamo = require('./Prestamo');

// N:M — Libro ↔ Autor (tabla intermedia explícita con campo extra "orden")
Libro.belongsToMany(Autor, { through: 'libro_autores', foreignKey: 'libro_id', otherKey: 'autor_id' });
Autor.belongsToMany(Libro, { through: 'libro_autores', foreignKey: 'autor_id', otherKey: 'libro_id' });

// N:1 — Prestamo → Libro
Prestamo.belongsTo(Libro,   { foreignKey: 'libro_id',   as: 'libro' });
Libro.hasMany(Prestamo,     { foreignKey: 'libro_id',   as: 'prestamos' });

// N:1 — Prestamo → Usuario
Prestamo.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
Usuario.hasMany(Prestamo,   { foreignKey: 'usuario_id', as: 'prestamos' });

module.exports = { Autor, Libro, Usuario, Prestamo };