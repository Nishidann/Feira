'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MonitorAtividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MonitorAtividade.belongsTo(models.Monitor, { foreignKey: 'idMonitor'});
    }
  }
  MonitorAtividade.init({
    estevePresente: DataTypes.BOOLEAN,
    idMonitor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'monitores',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'MonitorAtividade',
    tableName: 'monitorAtividades'
  });
  return MonitorAtividade;
};