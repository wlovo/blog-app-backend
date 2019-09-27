const config = require('./index');

module.exports = {
  development: config.db,
  test: config.db,
  production: config.db,
};
