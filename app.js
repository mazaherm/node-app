const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render("index"))
app.get('/about-me', (req, res) => res.render("about-me"))

const logger = (req, res, next) => {
    console.log(new Date(), req.method, req.url);
    next();
}

const errorMessage = (req, res, next) => {
    console.log("Oh no! Page not found");
    res.send(404, "Oh no! Page not found");
}

app.use(logger);
app.use(errorMessage);

app.listen(port, () => console.log(`Listening on port ${port}`))