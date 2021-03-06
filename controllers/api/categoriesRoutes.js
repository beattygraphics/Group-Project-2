const router = require('express').Router();
const { Category, Card, Favorites } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({include: [{model: Card}]});
    const categoryMap = categoryData.map((category) => category.get({ plain: true }));
    res.status(200).json(categoryMap)
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {include: [{model: Card}]});
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
    const categoryData = await Category.create(req.body);
    const category = categoryData.get({ plain: true });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}); 

module.exports = router;