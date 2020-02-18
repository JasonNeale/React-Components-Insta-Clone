import React from 'react';

const LikeSection = ({ pLikes, handleNewLike,  }) => {

    return (
        <div>
            <div className="like-section" key="likes-icons-container">
                <div className="like-section-wrapper"><i onClick={handleNewLike} className="far fa-heart icons" /></div>
                <div className="like-section-wrapper"><i className="far fa-comment icons" /></div>
                <div className="like-section-wrapper"><i className="far fa-paper-plane icons" /></div>
            </div>
            <span className="like-number">{pLikes} likes</span>
        </div>
    )
};

export default LikeSection;
