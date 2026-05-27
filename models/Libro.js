class Libro extends Model {}
Libro.init({
  titulo:             { type: DataTypes.STRING(200), allowNull: false },
  isbn:               { type: DataTypes.STRING(20),  allowNull: false, unique: true },
  anio_publicacion:   { type: DataTypes.INTEGER },
  copias_disponibles: {
    type: DataTypes.INTEGER, defaultValue: 1,
    validate: { min: 0 }          // R6: no puede ser negativo
  },
  activo: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { sequelize, modelName: 'Libro', tableName: 'libros', timestamps: true });