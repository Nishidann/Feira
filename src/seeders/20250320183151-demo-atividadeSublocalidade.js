'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('atividadeSublocalidades', [
      {
        nome: 'Auditório Principal',
        descricao: 'Espaço para palestras e apresentações gerais',
        quantidadeMonitores: 3,
        tipo: 'seção',
        duracao: '01:30:00',
        capacidadeVisitante: 200,
        status: 'ocupada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Laboratório de Robótica',
        descricao: 'Demonstrações de projetos e protótipos robóticos',
        quantidadeMonitores: 4,
        tipo: 'contínuo',
        duracao: '03:00:00',
        capacidadeVisitante: 50,
        status: 'ociosa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sala de Realidade Virtual',
        descricao: 'Experiência imersiva com jogos e simulações',
        quantidadeMonitores: 2,
        tipo: 'seção',
        duracao: '00:45:00',
        capacidadeVisitante: 15,
        status: 'inativa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Oficina de Programação',
        descricao: 'Mini curso prático de lógica e desenvolvimento',
        quantidadeMonitores: 5,
        tipo: 'seção',
        duracao: '02:00:00',
        capacidadeVisitante: 25,
        status: 'inativa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Exposição de Projetos',
        descricao: 'Mostra dos melhores projetos da feira',
        quantidadeMonitores: 3,
        tipo: 'contínuo',
        duracao: '04:00:00',
        capacidadeVisitante: 100,
        status: 'ocupada',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('atividadeSublocalidades', null, {});
  }
};
