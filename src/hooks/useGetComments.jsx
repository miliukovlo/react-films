import { useSelector } from "react-redux"

export const useGetComments = (id) => {
    const allComments = useSelector(state => state.comments)

    return allComments.comments.filter(comment => comment.filmId === id)

}