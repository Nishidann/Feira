'use strict';

const bcrypt = require('bcryptjs');
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const { Pessoa } = sequelize.models;
  
  class Monitor extends Pessoa {
    static associate(models) {
      Monitor.hasMany(models.MonitorAtividade, { foreignKey: 'idMonitor' });
      Monitor.hasMany(models.AgendamentoAtividadeFeira, { foreignKey: 'idMonitor' });
    }
    
    validarSenha(senha) {
      return bcrypt.compare(senha, this.senha);
    }
  }

  Monitor.init({
    ...Pessoa.rawAttributes,
    ra: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Monitor',
    tableName: 'monitores',
    hooks: {
      // Antes de criar um novo registro, criptografa a senha
      beforeCreate: async (monitor, options) => {
        if (monitor.senha) {
          monitor.senha = await bcrypt.hash(monitor.senha, 10);
        }
      },
      // Antes de atualizar, verifica se a senha foi alterada e, se sim, criptografa-a novamente
      beforeUpdate: async (monitor, options) => {
        if (monitor.changed('senha')) {
          monitor.senha = await bcrypt.hash(monitor.senha, 10);
        }
      }
    }
  });

  return Monitor;
};
