const router = require('express').Router();
const { Card, Favorites, Category } = require('../../models');

// The `/api/cards` endpoint

router.get('/', async (req, res) => {
  // find all cards by category
  try {
    const categoryData = await Card.findAll();
    const categoryMap = categoryData.map((category) => category.get({ plain: true }));
    res.status(200).json(categoryMap)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
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

router.post('/', async (req, res) => {
  try {
    const cardData = await Card.create(req.body);
    const card = cardData.get({ plain: true });
    res.status(200).json(card)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;