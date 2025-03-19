'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('departamentos', [
      { nome: 'Recursos Humanos', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'Tecnologia da Informação', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'Financeiro', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'Marketing', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'Jurídico', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departamentos', null, {});
  }
};
