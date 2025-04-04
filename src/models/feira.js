'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feira extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feira.hasMany(models.AgendamentoFeira, { foreignKey: 'idFeira' });
    }
  }
  Feira.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feira',
    tableName: 'feiras'
  });
  return Feira;
};