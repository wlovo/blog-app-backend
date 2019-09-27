const router = require('express').Router();
const commentController = require('../controllers/Comment');

router.route('/')
  .get(commentController.readAll)
  .post(commentController.create);

router.route('/:id')
  .get(commentController.read)
  .put(commentController.update)
  .delete(commentController.delete);

module.exports = router;
