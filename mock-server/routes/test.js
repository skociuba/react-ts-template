const express = require('express');
const router = express.Router();

const test = require('../data/test/test.json');

router.get('/', (req, res) => {
  try {
    if (req.query) {
      res.json(test);
    } else {
      res.status(500).send('invalid params');
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
