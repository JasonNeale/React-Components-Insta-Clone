import React from 'react';
import './Comment.css';

const Comment = ({username, text}) => {
    return (
        <div className="comment-text">
            <span className="user">{username}</span>
            <span className="comment">{text}</span>
        </div>
    );
};

export default Comment;