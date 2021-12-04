const router = require('express').Router();
const categoriesRoutes = require('./categoriesRoutes');
const cardRoutes = require('./cardRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/categories', categoriesRoutes);
router.use('/card', cardRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;