const router = require('express').Router();
const postController = require('../controllers/Post');

router.route('/')
  .get(postController.readAll)
  .post(postController.create);

router.route('/:id')
  .get(postController.read)
  .put(postController.update)
  .delete(postController.delete);

module.exports = router;
