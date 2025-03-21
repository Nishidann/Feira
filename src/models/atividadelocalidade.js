'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { Atividade } = sequelize.models;
  const { Sublocalidade } = sequelize.models;

  class AtividadeLocalidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sublocalidade.belongsTo(models.Localidade, { foreignKey: 'idLocalidade'});
    }
  }
  AtividadeLocalidade.init({
    ...Atividade.rawAttributes,
    idLocalidade: {
      type: DataTypes.INTEGER,
      references: {
        model: 'localidades',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'AtividadeLocalidade',
    tableName: 'atividadeLocalidades'
  });
  return AtividadeLocalidade;
};