const router = require('express').Router();
const categoriesRoutes = require('./categoriesRoutes');
const cardRoutes = require('./cardRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const userRoutes = require('./userRoutes');

router.use('/categories', categoriesRoutes);
router.use('/card', cardRoutes);
router.use('/favorite', favoriteRoutes);
router.use('/user', userRoutes);

module.exports = router;