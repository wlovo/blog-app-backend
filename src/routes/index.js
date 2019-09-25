const router = require('express').Router();

/* Main route */
router.route('/')
  .get((req, res) => res.json({ message: 'hello' }));

// TODO: Add user sign in/out plus validation
// router.route('/user')
//   .post(require('./user'));

module.exports = router;
