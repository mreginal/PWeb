
const express = require('express');
const app = express();
const animeController = require('./controllers/AnimeController');

app.use(express.json());

app.get('/anime', (req, res) => animeController.getAllAnimes(req, res));
app.get('/anime/:id', (req, res) => animeController.getAnimeById(req, res));
app.post('/anime', (req, res) => animeController.createAnime(req, res));
app.put('/anime/:id', (req, res) => animeController.updateAnime(req, res));
app.delete('/anime/:id', (req, res) => animeController.deleteAnime(req, res));

module.exports = app;
