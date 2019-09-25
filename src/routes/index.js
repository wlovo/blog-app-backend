const express = require('express');

const router = express.Router();

/* Main route */
router.route('/').get((req, res) => res.json({ message: 'hello' }));

// TODO: Add user sign in/out plus validation
// router.route('/sign-in').post(usersController.authenticate);
// router.route('/sign-out').post(usersController.unauthenticate);

module.exports = router;
