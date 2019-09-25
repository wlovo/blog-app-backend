const expressValidation = require('express-validation');

/**
 * Generic error handler. Returns any error found in a json format.
 *
 * @param err Error object
 * @param req Express request object
 * @param res Express response object
 * @param next next
 */
module.exports = function handleGenericError(err, req, res, next) {
  if (err instanceof expressValidation.ValidationError) {
    const obj = {};
    Object.keys(err.errors).forEach((arrKey) => {
      obj[err.errors[arrKey].field] = err.errors[arrKey].messages;
    });
    return res.status(403).json({
      errors: {
        obj,
      },
    });
  }
  return res.status(err.status || 500)
    .json({
      status: err.status || 500,
      message: 'Error',
    });
};
