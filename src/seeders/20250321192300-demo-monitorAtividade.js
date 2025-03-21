'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('monitorAtividades', [
      {
        estevePresente: true,
        idMonitor: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estevePresente: false,
        idMonitor: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estevePresente: true,
        idMonitor: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estevePresente: true,
        idMonitor: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estevePresente: false,
        idMonitor: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('monitorAtividades', null, {});
  }
};
