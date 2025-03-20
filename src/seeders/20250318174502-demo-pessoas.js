'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //await queryInterface.bulkInsert('pessoas', [], {});
  },

    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('pessoas', null, {});
  }
};

