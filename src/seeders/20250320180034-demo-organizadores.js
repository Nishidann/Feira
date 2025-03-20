'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Organizadores', [
      {
        nome: 'Carlos Silva',
        telefone: '11987654321',
        email: 'carlos.silva@example.com',
        senha: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Souza',
        telefone: '11987651234',
        email: 'ana.souza@example.com',
        senha: 'segredo456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'João Pereira',
        telefone: '21987654321',
        email: 'joao.pereira@example.com',
        senha: 'password789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mariana Oliveira',
        telefone: '31987654321',
        email: 'mariana.oliveira@example.com',
        senha: 'supersecreto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Lucas Ferreira',
        telefone: '41987654321',
        email: 'lucas.ferreira@example.com',
        senha: 'organizador2025',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Organizadores', null, {});
  }
};
