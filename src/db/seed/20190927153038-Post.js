const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const posts = [
      {
        title: 'Hello World',
        body: 'Hi',
        authorId: 1,
      },
      {
        title: 'Knowledge by William Lovo',
        body: 'Only as I begin looking into the past as I prepare for the future, I realize... I know nothing',
        authorId: 1,
      },
      {
        title: 'Knowledge by William Lovo',
        body: 'As I began reflecting on the past in preparation for the future, I realized... I know nothing',
        authorId: 1,
      },
    ];

    return queryInterface.bulkInsert('Posts', posts, {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Posts', null, {})
  ,
};
