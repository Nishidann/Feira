'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgendamentoAtividadeFeira extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AgendamentoAtividadeFeira.belongsTo(models.Monitor, { foreignKey: 'idMonitor'});
      // AgendamentoAtividadeFeira.belongsTo(models.Atividade, { foreignKey: 'idAtividade'});
      AgendamentoAtividadeFeira.belongsTo(models.AgendamentoFeira, { foreignKey: 'idAgendamento'});
    }
  }
  AgendamentoAtividadeFeira.init({
    quantidadeMonitoresInscritos: DataTypes.INTEGER,
    idMonitor: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'monitores' , key: 'id'}
    },
    idAgendamento: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'agendamentoFeiras' , key: 'id'}
    }
    // idAtividade: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    //   references: {model: 'atividades' , key: 'id'}
    // },
  }, {
    sequelize,
    modelName: 'AgendamentoAtividadeFeira',
    tableName: 'agendamentoAtividadeFeiras'
  });
  return AgendamentoAtividadeFeira;
};