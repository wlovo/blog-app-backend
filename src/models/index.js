const Sequelize = require('sequelize');
const debug = require('debug')('blog-app-backend:sequelize');
const config = require('../config');

const Comment = require('./comment');
const Post = require('./post');

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    database: config.db.database,
    username: config.db.username,
    password: config.db.password,
  },
);

if (process.env.DEBUG) {
  sequelize.authenticate()
    .then(() => {
      debug(`MySQL connection made at ${config.db.host}:${config.db.port}`);
    })
    .catch((err) => {
      debug(`MySQL connection failed: ${config.db.host}, ${config.db.port}, ${config.db.database}`, err);
    });
}

const models = {
  Comment: sequelize.import('Comment', Comment),
  Post: sequelize.import('Post', Post),
};

Object.values(models).forEach((model) => (model.associate && typeof model.associate === 'function' ? model.associate(models) : null));

sequelize.sync();

module.exports = models;
