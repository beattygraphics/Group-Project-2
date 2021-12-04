const router = require('express').Router();
const { Category, Card, Favorites } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const favoritesCard = await Category.findAll({include: [{ model: Category}]});
        // category.user_id = req.session.user_id
        res.status(200).json(favoritesCard)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const favoritesCard = await Category.findByPk(req.params.id, {include: [{model: Card}]});
        res.status(200).json(favoritesCard)
        if (!favoritesCard) {
            res.status(404).json({message: 'Cannot find Favorite with this ID'})
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;