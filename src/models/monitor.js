'use strict';


const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const { Pessoa } = sequelize.models;
  class Monitor extends Pessoa {
    static associate(models) {
      // Associações aqui se precisar
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
