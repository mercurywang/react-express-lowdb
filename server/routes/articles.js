const express = require('express');
const router = express.Router();
const moment = require('moment');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ posts: [] }).write();

// get all articles
router.get('/', function (req, res, next) {
  if (req.query.search_text) {
    const posts = db.get('posts').find({ content: req.query.search_text }).value();
    console.log('posts=======', posts);
    res.send(posts);
  } else {
    res.send(db.get('posts'));
  }
});

// get article details by id
router.get('/:id', function (req, res, next) {
  const post = db
    .get('posts')
    .find({ id: parseInt(req.params.id) })
    .value();
  res.send(post);
});

// insert a new article
router.post('/', function (req, res, next) {
  const article = {
    id: db.get('posts').size().value() + 1,
    created_at: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
    update_at: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
    ...req.body
  };

  db.get('posts').push(article).write();

  res.send(article);
});

// insert comments to article
router.post('/:id/comments', function (req, res, next) {
  const id = req.params.id;
  const comment = req.body.comment;

  const post = db.get('posts').find({ id: parseInt(id) });
  const comments = post.value().comments;
  comments.push(comment);
  post.assign({ comments }).write();
  res.send(post);
});

// modify article
router.patch('/:id', function (req, res, next) {
  const id = req.params.id;
  const content = req.body.content;

  const post = db.get('posts').find({ id: parseInt(id) });
  post.assign({ content }).write();
  res.send(post);
});

module.exports = router;
