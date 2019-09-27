const get = require('lodash/get');
const pick = require('lodash/pick');
const { Post } = require('../models/');

const params = [
  'title',
  'body',
  'authorId',
];

module.exports.create = async (req, res) => {
  let post = get(req, 'body.post');
  if (!post) {
    return res.json({});
  }

  post = await Post.create(pick(post, params));
  return res.json(post);
};

module.exports.read = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const post = await Post.findByPk(id);
  return res.json(post);
};

module.exports.readAll = async (req, res) => {
  const posts = await Post.findAll();
  return res.json(posts);
};

module.exports.update = async (req, res) => {
  const post = get(req, 'body.post');
  const postId = get(req, 'params.id');
  if (!post || !postId) {
    return res.json({});
  }

  const existingPost = await Post.findByPk(postId);
  existingPost.update(post, { fields: params });
  await existingPost.save();
  return res.json(existingPost);
};

module.exports.delete = async (req, res) => {
  const postId = get(req, 'params.id');
  if (!postId) {
    return res.json({});
  }

  const post = await Post.findByPk(postId);
  const deletedPost = await post.destroy();
  return res.json({ deletedId: deletedPost.id });
};
