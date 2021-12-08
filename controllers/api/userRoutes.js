const router = require('express').Router();
const { User } = require('../../models');



router.get('/', async (req, res) => {
    // find all users
    try {
      const userData = await User.findAll();
      const users = userData.map((user) => user.get({ plain: true }));
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;

            res.status(200).json(userData);
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userData = await User.findOne({
            where: {
                email: email,
            },
        });
        console.log(userData);
        if (!userData.checkPassword(password)) {
            res.status(404).json({message: "The email or passwor is incorrect."});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(req.session.logged_in);
            console.log(req.session.user_id);
            res.status(200).json({ user: userData, message: "Successfully logged in!" });
        });
    } catch (error) {
        res.status(400).json({
            message: "Something happened when logging you in.",
            error
        });
    }
});

router.post('/logout', (req, res) => {
        if (req.session.logged_in) {
            req.session.destroy(() => res.status(204).json("logged out").end());
        } else {
            res.status(204).json("couldn't log you out").end();
        }
});

module.exports = router;
