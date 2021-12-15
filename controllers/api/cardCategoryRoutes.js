const router = require('express').Router();
const { Category, CardCategory, Card } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const cardCatData = await CardCategory.create(req.body);
        const cardCat = cardCatData.get({ plain: true });
        res.status(200).json(cardCat);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/:id', async (req, res) => {
    // finds all cards from specific category id
    try {
      const cardFromCatData = await Category.findByPk(req.params.id, {
        include: [
          { model: Card, through: CardCategory, as: 'cards_in_category' }
        ]
      });
      const cardsFromCategory = cardFromCatData.get({ plain: true });
      console.log(cardsFromCategory);
      if (!cardsFromCategory) {
        res.status(404).json({message: 'Cannot find category with this ID'})
        return;
      }
      res.status(200).json(cardsFromCategory)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;