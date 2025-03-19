'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      // Associação de herança: Pessoa pode ter um Monitor vinculado
      Pessoa.hasOne(models.Monitor, { foreignKey: 'id' });
    }
  }

  Pessoa.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas'
  });

  return Pessoa;
};
