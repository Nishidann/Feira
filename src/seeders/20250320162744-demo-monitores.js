'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('monitores', [
      {
        nome: 'João Monitor',
        telefone: '43999998888',
        email: 'joao.monitor@example.com',
        senha: 'senha123',
        ra: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Paula',
        telefone: '44988887777',
        email: 'ana.paula@example.com',
        senha: 'anaSenha321',
        ra: '87654321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Carlos Eduardo',
        telefone: '41977776666',
        email: 'carlos.edu@example.com',
        senha: 'carlos2024',
        ra: '11223344',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Beatriz Ferreira',
        telefone: '42966665555',
        email: 'bia.ferreira@example.com',
        senha: 'ferreiraBia2024',
        ra: '44332211',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ricardo Souza',
        telefone: '41955554444',
        email: 'ricardo.souza@example.com',
        senha: 'souzaRicardo123',
        ra: '99887766',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('People', null, {});
  }
};
