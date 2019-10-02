const get = require('lodash/get');
const pick = require('lodash/pick');
const { Post } = require('../models');

const mutableParams = ['authorId', 'title', 'body'];

module.exports.create = async (req, res) => {
  let post = get(req, 'body.post');
  if (!post) {
    return res.json({});
  }

  post = await Post.create(pick(post, mutableParams));
  return res.json(post);
};

module.exports.read = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const post = await Post.findByPk(id,
    { include: [{ all: true, order: [['updatedAt', 'ASC']] }] });
  return res.json(post);
};

module.exports.readAll = async (req, res) => {
  const limit = Number.parseInt(get(req, 'query.limit'), 10);
  const order = get(req, 'query.order', 'DESC');
  const posts = await Post.findAll({
    include: [{ all: true, order: [['updatedAt', 'ASC']] }],
    limit: limit || null,
    order: [['updatedAt', order]],
  });
  return res.json(posts);
};

module.exports.update = async (req, res) => {
  const post = get(req, 'body.post');
  const id = get(req, 'params.id');
  if (!post || !id) {
    return res.json({});
  }

  const existingPost = await Post.findByPk(id);
  existingPost.update(post, { fields: mutableParams });
  await existingPost.save();
  return res.json(existingPost);
};

module.exports.delete = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const post = await Post.findByPk(id);
  const deletedPost = await post.destroy();
  return res.json({ deletedId: deletedPost.id });
};
