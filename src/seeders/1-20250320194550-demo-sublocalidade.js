'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("sublocalidades", [
      {
        nome: "Centro",
        descricao: "Área central da cidade",
        idlocalidade: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Bairro Novo",
        descricao: "Região em desenvolvimento",
        idlocalidade: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Vila Velha",
        descricao: "Área histórica",
        idlocalidade: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("sublocalidades", null, {});
  },
};