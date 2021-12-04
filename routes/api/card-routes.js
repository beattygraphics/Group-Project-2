const router = require('express').Router();
const { Card, Favorites } = require('../../models');

// The `/api/cards` endpoint

router.get('/', (req, res) => {
  // find all cards by category
  try {
    const categoryData = await Category.findAll({include: [{model: Card}]});
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find cards by its Favorites value
  try {
    const categoryData = await Favorites.findByPk(req.params.id, {include: [{model: Card}]});
    res.status(200).json(categoryData)
    if (!categoryData) {
      res.status(404).json({message: 'Cannot find category with this ID'})
    }
  } catch (err) {
    res.status(500).json(err);
  }

});

  

module.exports = router;