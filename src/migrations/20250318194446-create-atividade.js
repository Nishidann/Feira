'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atividades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      descrição: {
        type: Sequelize.STRING
      },
      monitores: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.ENUM('seção', 'contínuo')
      },
      duracao: {
        type: Sequelize.INTEGER
      },
      capacidadeVisitante: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('ativo', 'inativo')
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
    await queryInterface.dropTable('Atividades');
  }
};