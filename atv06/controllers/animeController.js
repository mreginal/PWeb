

const animeService = require('../services/animeService');

class AnimeController {
    getAllAnimes(req, res) {
        const animes = animeService.getAllAnimes();
        return res.json(animes);
    }

    getAnimeById(req, res) {
        const id = parseInt(req.params.id);
        const anime = animeService.getAnimeById(id);
        
        if (anime) {
            return res.json(anime);
        } else {
            return res.status(404).json({ message: 'Anime não encontrado' });
        }
    }

    createAnime(req, res) {
        const { id, name, genre, studio } = req.body;
        const newAnime = animeService.createAnime(id, name, genre, studio);
        return res.status(201).json(newAnime);
    }

    updateAnime(req, res) {
        const id = parseInt(req.params.id);
        const updatedAnime = animeService.updateAnime(id, req.body);

        if (updatedAnime) {
            return res.json(updatedAnime);
        } else {
            return res.status(404).json({ message: 'Anime não encontrado' });
        }
    }

    deleteAnime(req, res) {
        const id = parseInt(req.params.id);
        const deletedAnime = animeService.deleteAnime(id);

        if (deletedAnime) {
            return res.status(204).json({ message: 'Anime deletado com sucesso' });
        } else {
            return res.status(404).json({ message: 'Anime não encontrado' });
        }
    }
}

module.exports = new AnimeController();

