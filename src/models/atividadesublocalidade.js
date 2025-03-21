'use strict';
const {
  Model
} = require('sequelize');
const atividadelocalidade = require('./atividadelocalidade');
module.exports = (sequelize, DataTypes) => {
  const { Atividade } = sequelize.models; 
  class AtividadeSublocalidade extends Atividade {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AtividadeSublocalidade.belongsTo(models.Sublocalidade, { foreignKey: 'idSublocalidade'});
    }
  }
  AtividadeSublocalidade.init({
    ...Atividade.rawAttributes,
    tipo: DataTypes.STRING,
    duracao: DataTypes.TIME,
    capacidadeVisitante: DataTypes.INTEGER,
    status: DataTypes.STRING,
    idSublocalidade: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sublocalidades',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'AtividadeSublocalidade',
    tableName: 'atividadeSublocalidades'
  });
  return AtividadeSublocalidade;
};