const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('pages/index', { 
        title: 'Viberni - A social media platform that adapts to how you feel',
        currentPage: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { 
        title: 'About - Viberni',
        currentPage: 'about'
    });
});

app.get('/questionnaire', (req, res) => {
    res.render('pages/questionnaire', { 
        title: 'Questionnaire - Viberni',
        currentPage: 'questionnaire'
    });
});

app.post('/questionnaire', (req, res) => {
    const { name, email, currentPlatforms, emotionalImpact, desiredFeeling, features, additionalThoughts } = req.body;
    
    console.log('Questionnaire submission:', {
        name,
        email,
        currentPlatforms,
        emotionalImpact,
        desiredFeeling,
        features,
        additionalThoughts,
        timestamp: new Date().toISOString()
    });
    
    res.render('pages/success', { 
        title: 'Thank You - Viberni',
        currentPage: 'success',
        userName: name || 'Friend'
    });
});

app.get('/support', (req, res) => {
    res.render('pages/support', { 
        title: 'Support - Viberni',
        currentPage: 'support'
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// 404 Error handler
app.use((req, res) => {
    res.status(404).render('pages/404', { 
        title: 'Page Not Found - Viberni',
        currentPage: '404'
    });
});

// 500 Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/500', { 
        title: 'Server Error - Viberni',
        currentPage: '500'
    });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Viberni server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
