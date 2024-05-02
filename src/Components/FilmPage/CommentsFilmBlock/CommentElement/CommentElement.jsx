import React from 'react';
import './CommentElementStyle.css'

const CommentElement = ({comment}) => {
    return (
    <div className="comment-block__element">
        <h4 className="element-title">{comment.user}</h4>
        <p className="element-text">{comment.text}</p>
    </div>
    );
}

export default React.memo(CommentElement);
