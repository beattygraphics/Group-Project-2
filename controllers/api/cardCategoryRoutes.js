const router = require('express').Router();
const { CardCategory } = require('../../models');

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
      const cardFromCatData = await CardCategory.findAll({ attributes: ['card_id'],
        where: {
          category_id: req.params.id
        }
      });
      const cardIdsFromCategory = cardFromCatData.map((card) => card.get({ plain: true }));
      console.log(cardIdsFromCategory)
      res.status(200).json(cardIdsFromCategory)
      if (!cardIdsFromCategory) {
        res.status(404).json({message: 'Cannot find category with this ID'})
      }
    } catch (err) {
      res.status(500).json(err);
    }
  
  });

module.exports = router;