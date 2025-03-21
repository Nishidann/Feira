'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agendamentoFeiras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      turno: {
        type: Sequelize.ENUM('Manhã', 'Tarde', 'Noite')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      idFeira: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'feiras' , key: 'id'}
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('agendamentoFeiras');
  }
};