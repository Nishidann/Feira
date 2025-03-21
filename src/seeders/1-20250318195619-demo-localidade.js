'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('localidades', [
      {
        nome: 'Bloco A',
        descricao: 'Bloco principal com salas de aula',
        quantidadeSalas: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Biblioteca',
        descricao: 'Local com livros e áreas de estudo',
        quantidadeSalas: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Laboratório de Informática',
        descricao: 'Laboratório com computadores para prática',
        quantidadeSalas: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('localidades', null, {});
  }
};
