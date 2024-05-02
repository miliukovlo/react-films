import { filmsData } from "../data/filmsData"

export const useFindSimilarFilms = (genres, id) => {
    const allFilms = filmsData

    let similarFilms = allFilms.filter(film => genres.every(checkGenre => film.genres.find(genre => checkGenre.name === genre.name)) && film.id !== id)

    if (similarFilms.length === 0) {
        similarFilms = allFilms.filter(film => genres.some(checkGenre => film.genres.find(genre => checkGenre.name === genre.name)) && film.id !== id);
    }


    return similarFilms.slice(0, 3)
}