const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'pug');
app.get('/', (req, res) => res.render("index"))

app.get('/about-me', (req, res) => res.render("index", {
    firstname: "Mazaher",
    lastname: "Muraj",
    company: "MMT",
    position: "Junior React Developer",
    likes: ["Footballs", "Films", "React"]
}))

app.listen(port, () => console.log(`Listening on port ${port}`))