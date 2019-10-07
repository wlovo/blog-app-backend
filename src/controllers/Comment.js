const get = require('lodash/get');
const pick = require('lodash/pick');
const { Comment } = require('../models');

// Fields that can be changed/mutated
const mutableParams = [
  'authorId',
  'postId',
  'body',
];

/**
 * Create a comment based on given object.
 * @param req Express request object
 * @param res Express response object
 * @return the created comment or empty object, if object isn't found
 */
module.exports.create = async (req, res) => {
  let comment = get(req, 'body.comment');
  if (!comment) {
    return res.json({});
  }

  comment = await Comment.create(pick(comment, mutableParams));
  return res.json(comment);
};

/**
 * Finds and returns the comment by id.
 * @param req Express request object
 * @param res Express response object
 * @return the created comment or empty object, if id isn't found
 */
module.exports.read = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const comment = await Comment.findByPk(id);
  return res.json(comment);
};

/**
 * Finds and returns all comments.
 * @param req Express request object
 * @param res Express response object
 * @return the array of comments
 */
module.exports.readAll = async (req, res) => {
  const order = get(req, 'query.order', 'DESC');
  const comments = await Comment.findAll({ order: [['updatedAt', order]] });
  return res.json(comments);
};

/**
 * Updates the specified comment.
 * @param req Express request object
 * @param res Express response object
 * @return the created comment or empty object, if id or comment object isn't found
 */
module.exports.update = async (req, res) => {
  const comment = get(req, 'body.comment');
  const id = get(req, 'params.id');
  if (!comment || !id) {
    return res.json({});
  }

  const existingComment = await Comment.findByPk(id);
  existingComment.update(comment, { fields: mutableParams });
  await existingComment.save();
  return res.json(existingComment);
};

/**
 * Deletes the comment by id.
 * @param req Express request object
 * @param res Express response object
 * @return the id of the deleted comment
 */
module.exports.delete = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const comment = await Comment.findByPk(id);
  const deletedComment = await comment.destroy();
  return res.json({ deletedId: deletedComment.id });
};
