module.exports = function normalizePort(val) {
  const port = parseInt(val, 10);

  if (port === undefined || port === null || Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};
