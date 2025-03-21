'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Localidade.hasMany(models.Sublocalidade, { foreignKey: 'idLocalidade' });
      Localidade.hasMany(models.AtividadeLocalidade, { foreignKey: 'idLocalidade' });
    }
  }
  Localidade.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    quantidadeSalas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Localidade',
    tableName: 'localidades'
  });
  return Localidade;
};