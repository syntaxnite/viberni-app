const express = require('express');
const router = express.Router();

// Questionnaire page
router.get('/', (req, res) => {
    res.render('pages/questionnaire', {
        title: 'Tell Us How Social Media Makes You Feel - Viberni',
        currentPage: 'questionnaire'
    });
});

// Handle questionnaire submission
router.post('/submit', (req, res) => {
    const responses = req.body;
    
    // Log the responses (in production, save to database)
    console.log('📝 New questionnaire response:', responses);
    
    // For now, just redirect with success message
    res.render('pages/questionnaire-success', {
        title: 'Thank You - Viberni',
        currentPage: 'questionnaire-success',
        responses: responses
    });
});

module.exports = router;
