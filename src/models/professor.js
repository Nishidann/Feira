'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Professor.init({
    nome: DataTypes.STRING,
    idDepartamento: {
        type: DataTypes.INTEGER,
        references: {
          model: 'departamentos',
          key: 'id'
        }
      }
  }, {
    sequelize,
    modelName: 'Professor',
    tableName: 'professores'
  });
  return Professor;
};