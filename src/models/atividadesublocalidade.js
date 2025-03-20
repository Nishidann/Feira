'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { Atividade } = sequelize.models; 
  class AtividadeSublocalidade extends Atividade {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AtividadeSublocalidade.init({
    ...Atividade.rawAttributes,
    tipo: DataTypes.STRING,
    duracao: DataTypes.TIME,
    capacidadeVisitante: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AtividadeSublocalidade',
    tableName: 'atividadeSublocalidades'
  });
  return AtividadeSublocalidade;
};