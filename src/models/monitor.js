'use strict';


const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const { Pessoa } = sequelize.models;
  class Monitor extends Pessoa {
    static associate(models) {
      Monitor.hasMany(models.MonitorAtividade, { foreignKey: 'idMonitor' });
      Monitor.hasMany(models.AgendamentoAtividadeFeira, { foreignKey: 'idMonitor' });
    }
  }

  Monitor.init({
    ...Pessoa.rawAttributes,
    ra: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Monitor',
    tableName: 'monitores'
  });

  return Monitor;
};
