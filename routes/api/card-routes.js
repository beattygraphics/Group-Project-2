const router = require('express').Router();
const { Card, Favorites } = require('../../models');

// The `/api/cards` endpoint

router.get('/', (req, res) => {
  // find all cards by category

});

router.get('/:id', (req, res) => {
  // find cards by its Favorites value

});

  

module.exports = router;