'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('professores', [
      { nome: 'Carlos Alberto', idDepartamento: 1, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ana Beatriz', idDepartamento: 2, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'João Silva', idDepartamento: 3, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Fernanda Lima', idDepartamento: 1, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ricardo Moreira', idDepartamento: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('professores', null, {});
  }
};