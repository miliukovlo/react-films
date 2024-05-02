import { useParams } from "react-router-dom"
import { filmsData } from "../data/filmsData"

export const useGetCurrentFilm = () => {
    const params = useParams()

    const allFilmsData = filmsData

    return allFilmsData.find(film => film.id === Number(params.id))
}