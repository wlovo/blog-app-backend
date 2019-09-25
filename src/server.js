// NPM packages
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');

// Custom functions/objects
const env = require('./config/environment');
const handleGenericError = require('./utils/handle-error');
const normalizePort = require('./utils/normalize-port');

const app = express();

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
app.use(require('./routes/index'));

// Favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// Handle generic errors
app.use(handleGenericError);

// Spin the server up
const server = app.listen(
  normalizePort(env.app.port),
  () => console.log(`Listening on port ${server.address().port}.`),
);

module.exports = app;
