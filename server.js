const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for projects page
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// Route for about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route for contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route for skills page
app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'skills.html'));
});

// Route for achievements page
app.get('/achievements', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'achievements.html'));
});

// Route for blog page (for future use)
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

// Route for services page (for future use)
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

// Route for testimonials page (for future use)
app.get('/testimonials', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'testimonials.html'));
});

// Route for education page
app.get('/education', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'education.html'));
});

// Route for transactions page
app.get('/transactions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'transactions.html'));
});

// Route for Subzero Nodes project page
app.get('/subzero-nodes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'subzero-nodes.html'));
});

// Route for Subzero AI project page
app.get('/subzero-ai', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'subzero-ai.html'));
});

// 404 handler - must be last route
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
