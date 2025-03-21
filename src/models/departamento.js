'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Departamento.hasMany(models.Professor, { foreignKey: 'idProfessor' });
    }
  }
  Departamento.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Departamento',
    tableName: 'departamentos'
  });
  return Departamento;
};