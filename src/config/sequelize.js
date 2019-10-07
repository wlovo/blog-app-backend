const config = require('./index');

// Uses the database specified in the config file
module.exports = {
  development: config.db,
  test: config.db,
  production: config.db,
};
