const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakePosts = [];

    for (let i = 0; i < 10; i += 1) {
      fakePosts.push({
        title: faker.random.words(5),
        body: faker.lorem.sentences(),
        authorId: 1,
      });
    }

    return queryInterface.bulkInsert('Posts', fakePosts, {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Posts', null, {})
  ,
};
