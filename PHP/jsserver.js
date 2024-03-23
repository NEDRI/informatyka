const express = require('express');
const phpExpress = require('php-express')();

const app = express();

// Set up PHP rendering engine
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');
app.set('views', __dirname);

// Handle PHP files
app.all(/.+\.php$/, phpExpress.router);

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
