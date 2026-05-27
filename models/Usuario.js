class Usuario extends Model {}
Usuario.init({
    nombre: { type: DataTypes.STRING(150), allowNull: false },
    email:  { type: DataTypes.STRING(200), allowNull: false, unique: true,
    validate: { isEmail: true } },
    activo: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { sequelize, modelName: 'Usuario', tableName: 'usuarios', timestamps: true });