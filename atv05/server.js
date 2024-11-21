const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let animes = [
  {
    id: 1,
    name: "Naruto",
    genre: "Ação/Aventura",
    studio: "Pierrot"
  },
  {
    id: 2,
    name: "Shingeki no Kyojin",
    genre: "Ação/Aventura",
    studio: "Wit Studio"
  }
];

let generateId = () => animes.length ? Math.max(...animes.map(a => a.id)) + 1 : 1;

app.get('/animes', (req, res) => {
    res.json(animes);
});

app.get('/animes/:id', (req, res) => {
    const { id } = req.params;
    const anime = animes.find(a => a.id === parseInt(id));
    if (!anime) return res.status(404).json({ error: "Anime não encontrado" });
    res.json(anime);
});


app.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;
    if (!name || !genre || !studio) {
        return res.status(400).json({ error: "Todos os campos (name, genre, studio) são obrigatórios" });
    }

    const newAnime = {
        id: generateId(),
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

    if (!name || !genre || !studio) {
        return res.status(400).json({ error: "Todos os campos (name, genre, studio) são obrigatórios" });
    }

    const animeIndex = animes.findIndex(a => a.id === parseInt(id));
    if (animeIndex === -1) return res.status(404).json({ error: "Anime não encontrado" });

    animes[animeIndex] = { id: parseInt(id), name, genre, studio };
    res.json(animes[animeIndex]);
});

app.delete('/animes/:id', (req, res) => {
    const { id } = req.params;
    const animeIndex = animes.findIndex(a => a.id === parseInt(id));
    if (animeIndex === -1) return res.status(404).json({ error: "Anime não encontrado" });

    animes.splice(animeIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
