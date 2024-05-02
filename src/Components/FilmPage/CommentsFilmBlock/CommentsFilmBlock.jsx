import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../../data/reducer/commentReducer';
import CommentElement from './CommentElement/CommentElement';
import './CommentsFilmBlockStyle.css'

const CommentsFilmBlock = ({
    comment,
    commentsCurrentFilm,
    currentFilm
}) => {

    const dispatch = useDispatch()
    
    const handleAddComment = useCallback(() => {
        dispatch(addComment({
            filmId: currentFilm.id,
            user: 'Анонимный пользователь',
            text: comment.value
        }))
        comment.setValue('')
    }, [comment, currentFilm.id, dispatch])
    return (
    <div className="film-page__comment-block">
        <h2 className='film-page__title'>Комментарии</h2>
        <textarea name="" id="" cols="70" rows="10" value={comment.value} onChange={comment.onChange}>{comment.value}</textarea>
        <button onClick={handleAddComment} className='comment-block__button'>Добавить комментарий</button>
        {commentsCurrentFilm.length === 0 ?
            <div className="comment-block__no-comments">
                <h4>Комментариев нет!</h4>
            </div>
            :
            commentsCurrentFilm.map(comment => {
                return (
                    <CommentElement
                        comment={comment}
                    />
                )
            })
    }
    </div>
    );
}

export default React.memo(CommentsFilmBlock);
