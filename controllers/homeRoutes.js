const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/post/:id", withAuth, async (req, res) => {

    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        });

        const post = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'text',
                'title',
                'date_created',
            ],
            include: [
                {
                    model: User,
                    attribute: ['username']
                }
            ]
        });

        
        const posts = postData.map((post) => post.get({ plain: true }));

        console.log(posts)
        
        res.render('dashboard', {
            posts,
            logged_in: true,
        });
        // const userData = await User.findByPk(req.session.userId, {
        //     attributes: { exclude: ['password'] },
        //     include: [{ model: Post }],
        // });

        // const user = userData.get({ plain: true });

        // res.render('dashboard', {
        //     ...user,
        //     logged_in: true,
        // });
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;

