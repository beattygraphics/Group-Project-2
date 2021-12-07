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

module.exports = router;