'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('atividadeLocalidades', [
      {
        nome: 'Palestra de Tecnologia',
        descricao: 'Uma palestra sobre tendências tecnológicas.',
        quantidadeMonitores: 50,
        idLocalidade: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Workshop de Programação',
        descricao: 'Aprenda a programar em JavaScript do zero.',
        quantidadeMonitores: 30,
        idLocalidade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Exposição de Robótica',
        descricao: 'Demonstração de robôs e inovações.',
        quantidadeMonitores: 40,
        idLocalidade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Aula de Design Gráfico',
        descricao: 'Introdução ao design usando ferramentas digitais.',
        quantidadeMonitores: 20,
        idLocalidade: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mesa Redonda: Futuro das IA',
        descricao: 'Debate sobre o impacto da inteligência artificial.',
        quantidadeMonitores: 60,
        idLocalidade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('atividadeLocalidades', null, {});
  }
};
