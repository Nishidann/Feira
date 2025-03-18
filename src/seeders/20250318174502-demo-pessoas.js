'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pessoas', [
      {
        nome: 'João Silva',
        telefone: '(11) 98765-4321',
        email: 'joao.silva@example.com',
        senha: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Oliveira',
        telefone: '(21) 99876-5432',
        email: 'maria.oliveira@example.com',
        senha: 'senha456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro Costa',
        telefone: '(31) 97654-3210',
        email: 'pedro.costa@example.com',
        senha: 'senha789',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
