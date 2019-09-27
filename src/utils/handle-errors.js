const debug = require('debug')('blog-app-backend:errors');
const set = require('lodash/set');

/**
 * Generic error handler. Returns any error found in a json format.
 *
 * @param err Error object
 * @param req Express request object
 * @param res Express response object
 * @param next next
 */
module.exports.logError = (err, req, res, next) => {
  debug(err, err.stack);
  next(err);
};

module.exports.handleGenericError = (err, req, res, next) => {
  // Client error
  if (err) {
    // Reduce messages into a single object
    const messages = Object.keys(err.errors)
      .reduce((obj, key) => set(obj, `${err.errors[key].field}`, err.errors[key].messages), {});

    return res.status(403).json({
      errors: {
        messages,
      },
    });
  }
  // Something else happened
  return res.status(err.status || 500)
    .json({
      status: err.status || 500,
      message: 'Error',
    });
};
