'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sublocalidade extends Model {
    static associate(models) {
      Sublocalidade.hasMany(models.AtividadeSublocalidade, { foreignKey: 'idSublocalidade' });
      Sublocalidade.belongsTo(models.Localidade, { foreignKey: 'idLocalidade'});
    }
  }

  Sublocalidade.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      idLocalidade: {
        type: DataTypes.INTEGER,
        references: {
          model: 'localidades',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Sublocalidade',
      tableName: 'sublocalidades'
    }
  );

  return Sublocalidade;
};
