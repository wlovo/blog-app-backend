const router = require('express').Router();
const postRoutes = require('./post');

/* Main route */
router.route('/')
  .get((req, res) => res.json({ message: 'hello' }));

router.use('/posts', postRoutes);

// TODO: Add user sign in/out plus validation
// router.route('/user')
//   .post(require('./user'));

module.exports = router;
