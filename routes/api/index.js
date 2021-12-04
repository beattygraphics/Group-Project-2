const router = require('express').Router();
const categoriesRoutes = require('./categories-routes');
const cardRoutes = require('./card-routes');
const favoriteRoutes = require('./favorite-routes');

router.use('/categories', categoriesRoutes);
router.use('/card', cardRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;