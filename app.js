const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const expressValidation = require('express-validation');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes/index'));

app.use((err, req, res) => {
  if (err instanceof expressValidation.ValidationError) {
    const obj = {};
    Object.keys(err.errors).forEach((arrKey) => {
      obj[err.errors[arrKey].field] = err.errors[arrKey].messages;
    });
    return validationErrorResponse(req, res, obj);
  }
  return res.status(err.status || 500)
    .json({
      status: err.status || 500,
      message: 'Error',
    });
});

module.exports = app;
