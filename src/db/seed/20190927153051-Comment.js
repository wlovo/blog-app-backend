const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const comments = [
      {
        body: 'Hi',
        authorId: 1,
        postId: 1,
      },
      {
        body: 'I don\'t know what this means',
        authorId: 1,
        postId: 2,
      },
      {
        body: 'Huh?',
        authorId: 1,
        postId: 3,
      },
    ];

    return queryInterface.bulkInsert('Comments', comments, {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Comments', null, {}),
};
