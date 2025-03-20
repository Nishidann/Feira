'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sublocalidade extends Model {
    static associate(models) {
      Sublocalidade.belongsTo(models.Localidade, {
        foreignKey: 'idLocalidade',
        as: 'localidade'
      });
    }
  }

  Sublocalidade.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      idlocalidade: {
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
