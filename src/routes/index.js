const router = require('express').Router();
const postRoutes = require('./post');
const commentRoutes = require('./comment');

/* Posts route */
router.use('/posts', postRoutes);
/* Comments route */
router.use('/comments', commentRoutes);

module.exports = router;
