const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const posts = [
      {
        title: 'Hello World',
        body: 'Hi, I\'m here',
        authorId: 1,
      },
      {
        title: 'When did things get hard?',
        body: 'I tried to look for a soft pillow, but I could not find one that met my needs!',
        authorId: 1,
      },
      {
        title: 'What\'s your favorite flavor of wings?',
        body: 'I\'ve thoroughly enjoyed mild sauce, but I think it\'s too spicy.',
        authorId: 1,
      },
      {
        title: 'What should we do next?',
        body: 'I\'m doing what I can but I do not know how to save the world.',
        authorId: 1,
      },
      {
        title: 'I found something interesting!',
        body: 'I just realized something cool! If you...',
        authorId: 1,
      },
      {
        title: 'Here I am',
        body: 'I am here. Now what.',
        authorId: 1,
      },
      {
        title: 'My next trip',
        body: 'I have decided that my next trip will be somewhere in Europe. I can\'t wait to experience a new culture!',
        authorId: 1,
      },
    ];

    const fakePosts = [];

    for (let i = 0; i < 10; i += 1) {
      fakePosts.push({
        title: faker.lorem.words(5),
        body: faker.lorem.sentences(),
        authorId: 1,
      });
    }

    return queryInterface.bulkInsert('Posts', posts.concat(fakePosts), {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Posts', null, {})
  ,
};
