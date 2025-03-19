'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('professores', [
      { nome: 'Carlos Alberto', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'Ana Beatriz', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'João Silva', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'Fernanda Lima', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { nome: 'Ricardo Moreira', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('professores', null, {});
  }
};
