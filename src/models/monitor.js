'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Monitor extends Pessoa {
    static associate(models) {
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
