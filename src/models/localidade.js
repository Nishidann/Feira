'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Localidade.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    qtd_salas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Localidade',
    tableName: 'localidade'
  });
  return Localidade;
};