var express = require('express');
var router = express.Router();

/* Main route */
router.route('/').get({});

// TODO: Add user sign in/out plus validation
// router.route('/sign-in').post(usersController.authenticate);
// router.route('/sign-out').post(usersController.unauthenticate);

module.exports = router;
