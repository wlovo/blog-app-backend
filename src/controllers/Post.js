const get = require('lodash/get');
const pick = require('lodash/pick');
const { Post } = require('../models');

// Fields that can be changed/mutated
const mutableParams = ['authorId', 'title', 'body'];

/**
 * Create a post based on given object.
 * @param req Express request object
 * @param res Express response object
 * @return the created post or empty object, if object isn't found
 */
module.exports.create = async (req, res) => {
  let post = get(req, 'body.post');
  if (!post) {
    return res.json({});
  }

  post = await Post.create(pick(post, mutableParams));
  return res.json(post);
};

/**
 * Finds and returns the post by id.
 * @param req Express request object
 * @param res Express response object
 * @return the created post or empty object, if id isn't found
 */
module.exports.read = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const post = await Post.findByPk(id,
    { include: [{ all: true, order: [['updatedAt', 'ASC']] }] });
  return res.json(post);
};

/**
 * Finds and returns all posts.
 * @param req Express request object
 * @param res Express response object
 * @return the array of posts
 */
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

/**
 * Updates the specified post.
 * @param req Express request object
 * @param res Express response object
 * @return the created post or empty object, if id or post object isn't found
 */
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

/**
 * Deletes the post by id.
 * @param req Express request object
 * @param res Express response object
 * @return the id of the deleted post
 */
module.exports.delete = async (req, res) => {
  const id = get(req, 'params.id');
  if (!id) {
    return res.json({});
  }

  const post = await Post.findByPk(id);
  const deletedPost = await post.destroy();
  return res.json({ deletedId: deletedPost.id });
};
