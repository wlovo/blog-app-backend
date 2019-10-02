const get = require('lodash/get');
const pick = require('lodash/pick');
const { Comment } = require('../models');

const params = [
  'authorId',
  'postId',
  'body',
];

module.exports.create = async (req, res) => {
  let comment = get(req, 'body.comment');
  if (!comment) {
    return res.json({});
  }

  comment = await Comment.create(pick(comment, params));
  return res.json(comment);
};

module.exports.read = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const comment = await Comment.findByPk(id);
  return res.json(comment);
};

module.exports.readAll = async (req, res) => {
  const order = get(req, 'query.order', 'DESC');
  const comments = await Comment.findAll({ order: [['updatedAt', order]] });
  return res.json(comments);
};

module.exports.update = async (req, res) => {
  const comment = get(req, 'body.comment');
  const id = get(req, 'params.id');
  if (!comment || !id) {
    return res.json({});
  }

  const existingComment = await Comment.findByPk(id);
  existingComment.update(comment, { fields: params });
  await existingComment.save();
  return res.json(existingComment);
};

module.exports.delete = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const comment = await Comment.findByPk(id);
  const deletedComment = await comment.destroy();
  return res.json({ deletedId: deletedComment.id });
};
