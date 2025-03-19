'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Monitor extends Model {
    static associate(models) {
      // Associação reversa: Monitor pertence a uma Pessoa
      Monitor.belongsTo(models.Pessoa, { foreignKey: 'id' });
    }
  }

  Monitor.init({
    ra: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Monitor',
    tableName: 'monitors'
  });

  return Monitor;
};
