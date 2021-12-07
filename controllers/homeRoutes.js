const { Category } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll()

        const categories = ['jumba', 'humba', 'css', 'html']
        // categoryData.map((category) => category.get({plain: true}));
        
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

router.get('/create', async (req, res) => {
    try {
        const categoryData = await Category.findAll()

        const categories = ['jumba', 'humba', 'css', 'html']
        // categoryData.map((category) => category.get({plain: true}));
        
        res.render('createCard', {
            categories
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;