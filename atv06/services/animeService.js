
const animeRepository = require('../repositories/animeRepository');

class AnimeService {
    getAllAnimes() {
        return animeRepository.findAll();
    }

    getAnimeById(id) {
        return animeRepository.findById(id);
    }

    createAnime(id, name, genre, studio) {
        return animeRepository.create(id, name, genre, studio);
    }

    updateAnime(id, data) {
        return animeRepository.update(id, data);
    }

    deleteAnime(id) {
        return animeRepository.delete(id);
    }
}

module.exports = new AnimeService();
