import { filmsData } from "../data/filmsData";

export const useGetFilms = (number) => {
    const allFilmsData = filmsData;

    if (!Number.isInteger(number) || number < 0) {
        throw new Error('number должен быть целым числом и больше или равен нулю!');
    }

    return allFilmsData.slice(0, number);
};
