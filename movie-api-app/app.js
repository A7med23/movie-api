
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
    //the main link for the search function in the api
    let apiMainLink = 'https://api.themoviedb.org/3/search/movie?api_key=d49f417581b4e40e0e362764e4d6fbb0&query=';

    let searchInput = req.query.search;

    request(apiMainLink + searchInput, (error, response, body) => {

        let receivedData = JSON.parse(body);

        if(!error && response.statusCode === 200) {

            res.render('results', {results: receivedData["results"]});

        } else {

            console.log('Something Went Wrong');
            console.log(error);

        }
    });
    
});

app.listen(4000, () => {
    console.log('The Movie-Api App is running at port 4000');
});