const router = require('express').Router();
const categoriesRoutes = require('./categoriesRoutes');
const cardRoutes = require('./cardRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const userRoutes = require('./userRoutes');
const cardCatRoutes = require('./cardCategoryRoutes');

router.use('/categories', categoriesRoutes);
router.use('/card', cardRoutes);
router.use('/favorite', favoriteRoutes);
router.use('/users', userRoutes);
router.use('/cardCategory', cardCatRoutes);

module.exports = router;