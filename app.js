const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoutes = require('./routes/index');
const questionnaireRoutes = require('./routes/questionnaire');

app.use('/', indexRoutes);
app.use('/questionnaire', questionnaireRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).render('pages/404', {
        title: 'Page Not Found - Viberni',
        currentPage: '404'
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/error', {
        title: 'Server Error - Viberni',
        currentPage: 'error',
        error: err.message
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Viberni server is running on http://localhost:${PORT}`);
    console.log(`📱 Ready to connect emotions and experiences!`);
});

module.exports = app;
