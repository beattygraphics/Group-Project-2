const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage', { posts: cleanedPosts });
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/register', async (req, res) => {
    res.render('registration');
});

module.exports = router;