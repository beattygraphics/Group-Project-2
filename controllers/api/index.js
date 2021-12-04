const router = require('express').Router();
const cards = require('./card');
const categories = require('./categories');
const favorites = require('./favorites');
const userRoutes = require('./userRoutes');

router.use('/card', cards);
router.use('/categoires', categories);
router.use('/favorites', favorites);
router.use('/user', userRoutes);

module.exports = router;
