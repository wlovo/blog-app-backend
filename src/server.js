// NPM packages
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const debug = require('debug')('blog-app-backend:server');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');

// Custom functions/objects
const config = require('./config');
const { handleGenericError, logError } = require('./utils/handle-errors');
const normalizePort = require('./utils/normalize-port');

const app = express();

// Use CORS
app.use(cors());

// Logger
app.use(logger('dev'));

// Express json parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// Routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

// Favicon
app.use(favicon(path.join(__dirname, '../', 'public', 'images', 'favicon.ico')));

// Log and handle generic errors
app.use(logError);
app.use(handleGenericError);

// Spin the server up
const server = app.listen(
  normalizePort(config.app.port),
  () => debug(`Listening on port ${server.address().port}.`),
);

module.exports = app;
