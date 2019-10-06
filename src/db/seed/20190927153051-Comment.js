const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeComments = [];

    for (let i = 0; i < 10; i += 1) {
      fakeComments.push({
        body: faker.lorem.sentences(),
        authorId: 1,
        postId: faker.random.number({ min: 1, max: 8 }),
      });
    }

    return queryInterface.bulkInsert('Comments', fakeComments, {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Comments', null, {}),
};
