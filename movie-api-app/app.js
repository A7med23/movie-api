
const express = require('express');
const app = express();
const request = require('request');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    res.render('search')
});

app.get('/results', (req, res) => {
    res.render('results')
});

app.listen(4000, () => {
    console.log('The Movie-Api App is running at port 4000');
});