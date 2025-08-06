'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.renameColumn('Users', 'newColumn', 'email');
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.renameColumn('Users', 'email', 'newColumn');
    }
};
