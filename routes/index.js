const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Viberni - A Social Media Platform That Adapts to How You Feel',
        currentPage: 'home'
    });
});

// About page
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Viberni - Emotional Social Media',
        currentPage: 'about'
    });
});

// Support page
router.get('/support', (req, res) => {
    res.render('pages/support', {
        title: 'Support - Viberni',
        currentPage: 'support'
    });
});

module.exports = router;
