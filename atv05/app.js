const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());


app.get('/animes', (req, res) => {
  res.json(animes);
});

app.get('/animes/:id', (req, res) => {
  const { id } = req.params;
  const anime = animes.find(anime => anime.id === id);
  if (anime) {
    res.json(anime);
  } else {
    res.status(404).json({ error: "Anime não encontrado" });
  }
});

app.post('/animes', (req, res) => {
  const { name, genre, studio } = req.body;
  if (!name || !genre || !studio) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const newAnime = {
    id: uuidv4(),
    name,
    genre,
    studio
  };

  animes.push(newAnime);
  res.status(201).json(newAnime);
});

app.put('/animes/:id', (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;

  const animeIndex = animes.findIndex(anime => anime.id === id);
  if (animeIndex === -1) {
    return res.status(404).json({ error: "Anime não encontrado" });
  }

  if (!name || !genre || !studio) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  animes[animeIndex] = { id, name, genre, studio };
  res.json(animes[animeIndex]);
});

app.delete('/animes/:id', (req, res) => {
  const { id } = req.params;
  const animeIndex = animes.findIndex(anime => anime.id === id);

  if (animeIndex === -1) {
    return res.status(404).json({ error: "Anime não encontrado" });
  }

  animes.splice(animeIndex, 1);
  res.status(204).send();
});

module.exports = app;
