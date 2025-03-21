'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atividadeSublocalidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      quantidadeMonitores: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.ENUM('seção', 'contínuo')
      },
      duracao: {
        type: Sequelize.TIME
      },
      capacidadeVisitante: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('ocupada', 'ociosa', 'inativa')
      },
      idSublocalidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'sublocalidades' , key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('atividadeSublocalidades');
  }
};