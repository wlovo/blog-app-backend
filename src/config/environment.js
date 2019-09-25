require('dotenv').config({ silent: true });

const config = {
  app: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '8000',
    secret: process.env.SECRET || 'secret',
  },
  jwt: {
    secret: process.env.JWT_PRIVATE_KEY || 'secret',
  },
};

module.exports = config;
