const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render("index"))
app.get('/about-me', (req, res) => res.render("about-me"))

app.listen(port, () => console.log(`Listening on port ${port}`))