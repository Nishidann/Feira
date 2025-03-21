'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('agendamentoAtividadeFeiras', [
//       {
//         quantidadeMonitoresInscritos: 3,
//         idMonitor: 1,
//         idAgendamento: 1,
//         // idAtividade: 1,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         quantidadeMonitoresInscritos: 2,
//         idMonitor: 2,
//         idAgendamento: 1,
//         // idAtividade: 2,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         quantidadeMonitoresInscritos: 4,
//         idMonitor: 3,
//         idAgendamento: 2,
//         // idAtividade: 3,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         quantidadeMonitoresInscritos: 1,
//         idMonitor: 4,
//         idAgendamento: 3,
//         // idAtividade: 1,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         quantidadeMonitoresInscritos: 5,
//         idMonitor: 5,
//         idAgendamento: 3,
//         // idAtividade: 2,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ], {});
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete('agendamentoAtividadeFeiras', null, {});
//   }
// };
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('agendamentoAtividadeFeiras', 'idAtividade');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('agendamentoAtividadeFeiras', 'idAtividade', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'atividades', key: 'id' }
    });
  }
};
