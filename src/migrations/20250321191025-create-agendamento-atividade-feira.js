'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agendamentoAtividadeFeiras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidadeMonitoresInscritos: {
        type: Sequelize.INTEGER
      },
      idMonitor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'monitores' , key: 'id'}
      },
      idAgendamento: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'agendamentoFeiras' , key: 'id'}
      },
      idAtividade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'atividades' , key: 'id'}
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
    await queryInterface.dropTable('agendamentoAtividadeFeiras');
  }
};