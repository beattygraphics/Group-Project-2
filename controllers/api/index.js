const router = require('express').Router();
const cards = require('./card');
const categories = require('./categories');
const favorites = require('./favorites');

router.use('/card', cards);
router.use('/categoires', categories);
router.use('/favorites', favorites);

module.exports = router;
