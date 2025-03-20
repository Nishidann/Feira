'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { Pessoa } = sequelize.models; 
  class Organizador extends Pessoa {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organizador.init({
    ...Pessoa.rawAttributes,
  }, {
    sequelize,
    modelName: 'Organizador',
    tableName: 'organizadores'
  });
  return Organizador;
};