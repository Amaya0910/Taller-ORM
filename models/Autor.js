const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Autor extends Model {}
Autor.init({
  nombre:       { type: DataTypes.STRING(100), allowNull: false },
  apellido:     { type: DataTypes.STRING(100), allowNull: false },
  nacionalidad: { type: DataTypes.STRING(80) }
}, { sequelize, modelName: 'Autor', tableName: 'autores', timestamps: true });

module.exports = Autor;