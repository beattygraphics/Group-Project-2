const router = require('express').Router();
const { Category, Card, Favorites } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value

});

  

module.exports = router;