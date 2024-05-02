import { filmsData } from "../data/filmsData";

export const useFindFilms = (findValue, films) => {
    if (films) {
        const foundFilms = films.filter(film => film.name.includes(findValue))

        return foundFilms;
    } else {
        const allFilmsData = filmsData;

        const foundFilms = allFilmsData.filter(film => film.name.includes(findValue))
    
        return foundFilms;
    }
}
