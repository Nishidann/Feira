'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Atividade.hasMany(models.AgendamentoAtividadeFeira, { foreignKey: 'idAtividade'});
    }
  }
  Atividade.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    quantidadeMonitores: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Atividade',
    tableName: 'atividades'
  });
  return Atividade;
};