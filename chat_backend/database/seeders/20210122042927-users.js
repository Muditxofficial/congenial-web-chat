'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
     {
     firstName:'John',
     lastName:'Doe',
     email:'johndoe@gmail.com',
     password:bcrypt.hashSync('secret',10),
     gender:'Male'
    },
    {
    firstName:'Jane',
    lastName:'Doe',
    email:'janedoe@gmail.com',
    password:'secret',
    gender:'Female'
    },
    {
    firstName:'alex',
    lastName:'Doe',
    email:'alex@gmail.com',
    password:'secret',
    gender:'Male'
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users',null,{});
  }
};
