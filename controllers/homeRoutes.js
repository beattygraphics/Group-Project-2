const { Category } = require('../models');
const withAuth = require('../utils/auth')

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll()
        const categories = categoryData.map((category) => category.get({plain: true}));
        res.render('homepage', {
            categories
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/register', async (req, res) => {
    res.render('registration');
});

router.get('/create', withAuth, async (req, res) => {
    try {
        const categoryData = await Category.findAll()

        const categories = categoryData.map((category) => category.get({plain: true}));
        console.log(req.session.logged_in)
        res.render('createCard', {
            categories,
            logged_in: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;