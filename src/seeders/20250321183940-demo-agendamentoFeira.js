'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('agendamentoFeiras', [
      {
        data: new Date('2025-03-20 08:00:00'),
        turno: 'Manhã',
        idFeira: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data: new Date('2025-03-20 14:00:00'),
        turno: 'Tarde',
        idFeira: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data: new Date('2025-03-21 08:00:00'),
        turno: 'Manhã',
        idFeira: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data: new Date('2025-03-21 14:00:00'),
        turno: 'Tarde',
        idFeira: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('agendamentoFeiras', null, {});
  }
};
