const express = require('express');
const router = express.Router();
const moment = require('moment');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ posts: [] }).write();

router.get('/', function (req, res, next) {
  if (req.query.search_text) {
    const posts = db.get('posts').find({ content: req.query.search_text }).value();
    res.send(posts);
  } else {
    res.send(db.get('posts'));
  }
});

router.get('/:id', function (req, res, next) {
  const post = db
    .get('posts')
    .find({ id: parseInt(req.params.id) })
    .value();
  res.send(post);
});

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

module.exports = router;
