'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgendamentoFeira extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AgendamentoFeira.belongsTo(models.Feira, { foreignKey: 'idFeira'});
      AgendamentoFeira.hasMany(models.AgendamentoAtividadeFeira, { foreignKey: 'idAgendamento'});
    }
  }
  AgendamentoFeira.init({
    data: DataTypes.DATE,
    turno: DataTypes.STRING,
    idFeira: {
      type: DataTypes.INTEGER,
      references: {
        model: 'feiras',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'AgendamentoFeira',
    tableName: 'agendamentoFeiras'
  });
  return AgendamentoFeira;
};