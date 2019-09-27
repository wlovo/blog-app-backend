require('dotenv').config({ silent: true });

const config = {
  app: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '8000',
    secret: process.env.SECRET || 'secret',
  },
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 8889,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'blog_app',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  jwt: {
    secret: process.env.JWT_PRIVATE_KEY || 'secret',
  },
};

module.exports = config;
