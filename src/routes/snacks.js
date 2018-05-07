const express = require('express');
const knex = require('../db/knex');

const router = express.Router();

router.get('/snacks', (req, res, next) => {
  knex('snacks')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => next(err))
})

router.get('/users')
router.get('/reviews')

module.exports = router;
