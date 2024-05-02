export const useSortFilms = (films, sortBy, genres) => {
    let sortedFilms = [...films];
    let checkGenres = genres.filter(genre => genre.check);

    if (checkGenres.length > 0) {
        sortedFilms = sortedFilms.filter(film => 
            checkGenres.every(checkGenre => film.genres.some(genre => checkGenre.labelText === genre.name))
        );
    }

    switch(sortBy) {
        case "1":
            // никак не изменять массив фильмов
            break;
        case "2":
            sortedFilms.sort((a, b) => a.rating.kp - b.rating.kp);
            break;
        case "3":
            sortedFilms.sort((a, b) => b.rating.kp - a.rating.kp);
            break;
        default:
            throw new Error('Некорректное значение sortBy');
    }

    return sortedFilms;
}
