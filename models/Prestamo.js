class Prestamo extends Model {}
Prestamo.init({
    fecha_prestamo:        { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
    fecha_devolucion_esp:  { type: DataTypes.DATEONLY, allowNull: false },
    fecha_devolucion_real: { type: DataTypes.DATEONLY }   // null = préstamo activo
}, { sequelize, modelName: 'Prestamo', tableName: 'prestamos', timestamps: true });