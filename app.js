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

app.use(logger);

app.listen(port, () => console.log(`Listening on port ${port}`))