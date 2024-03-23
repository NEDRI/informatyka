const express = require('express');
const phpExpress = require('php-express')();

const app = express();

app.engine('php', phpExpress.engine);
app.set('view engine', 'php');
app.set('views', __dirname);

app.all(/.+\.php$/, phpExpress.router);

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
